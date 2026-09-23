import { buildCaseStudyPostMetadata, CaseStudyDerivedPostPage } from '@/lib/caseStudyDerivedPosts';

const slug = 'supplier-transition-strategy-scaling-brands';

export const metadata = buildCaseStudyPostMetadata(slug);

export default function Page() {
  return <CaseStudyDerivedPostPage slug={slug} />;
}
