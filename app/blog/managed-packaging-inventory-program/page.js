import { buildCaseStudyPostMetadata, CaseStudyDerivedPostPage } from '@/lib/caseStudyDerivedPosts';

const slug = 'managed-packaging-inventory-program';

export const metadata = buildCaseStudyPostMetadata(slug);

export default function Page() {
  return <CaseStudyDerivedPostPage slug={slug} />;
}
