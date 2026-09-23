import { TranscriptBackedPostPage, buildTranscriptBackedPostMetadata } from '@/lib/transcriptBackedPosts';

const slug = 'kehe-compliance-requirements';

export const metadata = buildTranscriptBackedPostMetadata(slug);

export default function Page() {
  return <TranscriptBackedPostPage slug={slug} />;
}
