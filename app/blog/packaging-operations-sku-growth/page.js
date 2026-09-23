import { buildCaseStudyPostMetadata, CaseStudyDerivedPostPage } from '@/lib/caseStudyDerivedPosts';

const slug = 'packaging-operations-sku-growth';

export const metadata = buildCaseStudyPostMetadata(slug);

export default function Page() {
  return <CaseStudyDerivedPostPage slug={slug} />;
}
