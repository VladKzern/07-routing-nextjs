"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { useParams } from "next/navigation";
import NotesClient from "@/components/NotesClient/NotesClient"; 
import SidebarNotes from "../@sidebar/SidebarNotes"; 

export default function NotesFilterPage() {
  const { slug } = useParams(); 

  const tag = Array.isArray(slug) ? slug[0] : slug; 

  const validTag = tag ?? "All";

  const { isLoading, error } = useQuery({
    queryKey: ["notes", validTag],
    queryFn: () => fetchNotes(1, 12, validTag === "All" ? "" : validTag), 
  });

  if (isLoading) return <p>Loading notes...</p>;
  if (error) return <p>Error loading notes</p>;

  return (
    <div style={{ display: "flex" }}>
      <SidebarNotes />
      <div style={{ flex: 1 }}>
        <h1>Notes - {validTag}</h1>
        <NotesClient tag={validTag} />
      </div>
    </div>
  );
}