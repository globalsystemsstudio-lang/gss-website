import RelocationReadinessQuiz from '../../components/RelocationReadinessQuiz';

export const metadata = {
  title: 'Relocation Readiness Quiz — Are You Ready to Move Abroad? | Global Systems Studio',
  description:
    '12 questions across financial compliance and practical logistics. Find out where you stand before you leave — and exactly what to do about the gaps.',
  alternates: { canonical: 'https://www.globalsystemsstudio.com/relocation-readiness-quiz/' },
};

export default function RelocationReadinessQuizPage() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <p
            className="section-tag"
            style={{ marginBottom: '12px', display: 'inline-block' }}
          >
            ROS™ Tool
          </p>
          <h1>Relocation Readiness Quiz</h1>
          <p
            className="article-meta"
            style={{
              fontStyle: 'italic',
              color: 'var(--text-light)',
              marginTop: '16px',
              fontSize: '17px',
              maxWidth: '720px',
            }}
          >
            12 questions. Two sections: Financial &amp; Compliance, and Practical Logistics. Takes about 3
            minutes. Your score tells you exactly where you stand — and what ROS™ resource matches where you are
            right now.
          </p>
        </div>
      </section>

      <section className="article-page" style={{ paddingTop: '56px' }}>
        <div className="container">
          <RelocationReadinessQuiz />
        </div>
      </section>
    </>
  );
}
