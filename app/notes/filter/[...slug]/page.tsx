"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { useParams } from "next/navigation"; 

export default function NotesFilterPage() {
  const { slug } = useParams();  

  const tag = Array.isArray(slug) ? slug[0] : slug;  

  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(1, 12, tag === "All" ? "" : tag), 
  });

  if (isLoading) return <p>Loading notes...</p>;
  if (error) return <p>Error loading notes</p>;

  const notes = data?.notes ?? [];

  return (
    <div>
      <h1>Notes - {tag}</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}