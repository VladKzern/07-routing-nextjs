"use client";

import { useParams } from "next/navigation";
import NotesClient from "./Notes.client";

export default function NotesFilterPage() {
  const { slug } = useParams();

  const tag = Array.isArray(slug) ? slug[0] : slug;
  const validTag = tag ?? "All";

  return (
    <>
      <h1>Notes - {validTag}</h1>
      <NotesClient tag={validTag} />
    </>
  );
}