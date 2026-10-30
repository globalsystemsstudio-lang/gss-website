import ClientAgreement from '../../components/ClientAgreement';
export const metadata = {
  title: 'ROS™ Pathway Customer Agreement',
  description: 'Review and sign your ROS pathway agreement after purchase.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://globalsystemsstudio.com/client-agreement/' },
};
export default function Page(){return <><section className="page-hero"><div className="container"><p className="eyebrow">For ROS™ pathway customers</p><h1>Your ROS™ pathway agreement</h1><p>Review your plan, keep a copy and sign when you are ready.</p></div></section><section><div className="container" style={{maxWidth:840}}><ClientAgreement/></div></section></>;}
