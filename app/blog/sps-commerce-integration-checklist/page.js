import { TranscriptBackedPostPage, buildTranscriptBackedPostMetadata } from '@/lib/transcriptBackedPosts';

const slug = 'sps-commerce-integration-checklist';

export const metadata = buildTranscriptBackedPostMetadata(slug);

export default function Page() {
  return <TranscriptBackedPostPage slug={slug} />;
}
