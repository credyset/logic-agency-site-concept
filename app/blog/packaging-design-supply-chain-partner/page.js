import { TranscriptBackedPostPage, buildTranscriptBackedPostMetadata } from '@/lib/transcriptBackedPosts';

const slug = 'packaging-design-supply-chain-partner';

export const metadata = buildTranscriptBackedPostMetadata(slug);

export default function Page() {
  return <TranscriptBackedPostPage slug={slug} />;
}
