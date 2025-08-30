"use client";

import { useParams, useRouter } from "next/navigation";
import NotePreview from "./NotePreview.client";

export default function NoteModalPage() {
  const { id } = useParams();
  const router = useRouter();

  const noteId = Array.isArray(id) ? id[0] : id;

  const handleClose = () => {
    router.back(); 
  };

  if (!noteId) return null;

  return <NotePreview id={noteId} onClose={handleClose} />;
}