import { useDropZoneStore } from '../store';

export default function DropZoneMessage() {
  const message = useDropZoneStore(state => state.message);

  return <p>{message}</p>
}