import { TranscriptBackedPostPage, buildTranscriptBackedPostMetadata } from '@/lib/transcriptBackedPosts';

const slug = 'packaging-cost-reduction-case-study';

export const metadata = buildTranscriptBackedPostMetadata(slug);

export default function Page() {
  return <TranscriptBackedPostPage slug={slug} />;
}
