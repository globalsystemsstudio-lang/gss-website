import Link from 'next/link';
import RelocationNextStep from '../../components/RelocationNextStep';

export default function BlogLayout({ children }) {
  return <>{children}<div className="container"><aside className="article-context"><p><strong>Published by Global Systems Studio</strong>, home of ROS™. <Link href="/our-story/">Meet founder and ROS™ creator Charlene L. M. Cupidore Bynoe.</Link></p><p>Use this article to prepare questions and organize your research. Rules, fees and eligibility can change. Confirm your situation with official authorities and appropriately licensed professionals before acting.</p><a href="mailto:globalsystemsstudio@gmail.com">Report an outdated detail or ask about ROS™</a></aside></div><RelocationNextStep /></>;
}
