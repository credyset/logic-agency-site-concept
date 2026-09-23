import EvergreenGuidePage from '@/components/EvergreenGuidePage';
import { evergreenGuides } from '@/lib/evergreen-guides';

const guide = evergreenGuides['cpg-channel-economics'];

export const metadata = {
  title: guide.title + ' — Logic Agency Inc.',
  description: guide.description,
  keywords: guide.keywords,
  alternates: { canonical: 'https://www.logicagencyinc.com/guides/cpg-channel-economics' },
  openGraph: { title: guide.title, description: guide.description, url: 'https://www.logicagencyinc.com/guides/cpg-channel-economics' },
};

export default function Page() { return <EvergreenGuidePage guide={guide} />; }
