const test = require('node:test');
const assert = require('node:assert/strict');
const {handler} = require('../netlify/functions/subscribe');
const request = payload => ({httpMethod:'POST',headers:{origin:'https://globalsystemsstudio.com'},body:JSON.stringify(payload)});
test('rejects malformed input without contacting the provider', async () => {
  const oldFetch=global.fetch; let calls=0;global.fetch=async()=>{calls++;throw Error('unexpected')};
  try {
    for(const payload of [null, [], {email:123,source:'guide'}, {email:'bad',source:'guide'}, {email:'person@example.com',source:'toString'}, {email:'person@example.com',source:'quiz',fields:[]}]) assert.equal((await handler(request(payload))).statusCode,400);
    assert.equal((await handler({...request({}),body:'{broken'})).statusCode,400);
    assert.equal((await handler({...request({}),headers:{origin:'https://unrelated.example'}})).statusCode,403);
    assert.equal(calls,0);
  } finally {global.fetch=oldFetch}
});
test('sends each form to the right group and prevents field injection', async () => {
  const oldFetch=global.fetch,oldKey=process.env.MAILERLITE_API_KEY;process.env.MAILERLITE_API_KEY='test-key-never-real';const sent=[];
  global.fetch=async(url,options)=>{sent.push(JSON.parse(options.body));return{ok:true}};
  try {
    for(const source of ['guide','quiz','calculator']) assert.equal((await handler(request({email:' Person@Example.com ',name:' Pat ',source,fields:{email:'attacker@example.com',name:'Override',quiz_score:'8/12',calculator_country:'Mexico',unknown:'ignore'}}))).statusCode,200);
    assert.deepEqual(sent.map(v=>v.groups[0]),['201234817198589521','197364302014842463','197364304761063011']);
    assert.deepEqual(sent.map(v=>v.email),Array(3).fill('person@example.com'));
    assert.deepEqual(sent[0].fields,{name:'Pat'});assert.deepEqual(sent[1].fields,{name:'Pat',quiz_score:'8/12'});assert.deepEqual(sent[2].fields,{name:'Pat',calculator_country:'Mexico'});
  } finally {global.fetch=oldFetch;if(oldKey===undefined)delete process.env.MAILERLITE_API_KEY;else process.env.MAILERLITE_API_KEY=oldKey;}
});
test('provider errors return no subscriber or provider detail', async () => {
  const oldFetch=global.fetch,oldKey=process.env.MAILERLITE_API_KEY;process.env.MAILERLITE_API_KEY='test-key-never-real';
  global.fetch=async()=>({ok:false,status:422,json:async()=>({secret:'provider-payload'})});
  try { const result=await handler(request({email:'person@example.com',source:'guide'}));assert.equal(result.statusCode,502);assert.equal(result.body.includes('provider-payload'),false); }
  finally {global.fetch=oldFetch;if(oldKey===undefined)delete process.env.MAILERLITE_API_KEY;else process.env.MAILERLITE_API_KEY=oldKey;}
});
