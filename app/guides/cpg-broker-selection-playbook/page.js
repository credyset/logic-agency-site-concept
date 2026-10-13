import EvergreenGuidePage from '@/components/EvergreenGuidePage';
import { evergreenGuides } from '@/lib/evergreen-guides';

const guide = evergreenGuides['cpg-broker-selection-playbook'];

export const metadata = {
  title: guide.title + ' — Logic Agency Inc.',
  description: guide.description,
  keywords: guide.keywords,
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/guides/cpg-broker-selection-playbook' },
  openGraph: { title: guide.title, description: guide.description, url: 'https://credyset.github.io/logic-agency-site-concept/guides/cpg-broker-selection-playbook' },
};

export default function Page() { return <EvergreenGuidePage guide={guide} />; }
