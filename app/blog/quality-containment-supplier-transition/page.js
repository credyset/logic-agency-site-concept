import { buildCaseStudyPostMetadata, CaseStudyDerivedPostPage } from '@/lib/caseStudyDerivedPosts';

const slug = 'quality-containment-supplier-transition';

export const metadata = buildCaseStudyPostMetadata(slug);

export default function Page() {
  return <CaseStudyDerivedPostPage slug={slug} />;
}
