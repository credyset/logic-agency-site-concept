import { TranscriptBackedPostPage, buildTranscriptBackedPostMetadata } from '@/lib/transcriptBackedPosts';

const slug = 'retail-operations-audit';

export const metadata = buildTranscriptBackedPostMetadata(slug);

export default function Page() {
  return <TranscriptBackedPostPage slug={slug} />;
}
