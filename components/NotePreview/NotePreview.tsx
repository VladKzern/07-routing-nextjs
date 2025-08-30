import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import Modal from '@/components/Modal/Modal';

interface Props {
  id: string;
  onClose: () => void;
}

export default function NotePreview({ id, onClose }: Props) {
  const { data: note, isLoading, isError } = useQuery<Note, Error>({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading note</p>;

  return (
    <Modal onClose={onClose}>
      <h3>{note?.title}</h3>
      <p>{note?.content}</p>
    </Modal>
  );
}