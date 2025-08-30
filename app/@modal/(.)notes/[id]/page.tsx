import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";
import { Suspense } from "react";

interface NoteModalPageProps {
  params: { id: string };
}

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const noteId = params.id;

  if (!noteId) return null;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <Suspense fallback={<p>Loading note...</p>}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreview id={noteId} onClose={() => window.history.back()} />
      </HydrationBoundary>
    </Suspense>
  );
}