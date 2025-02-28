import { useStore } from '../store';

export default function DropZoneMessage() {
  const message = useStore(state => state.message);

  return <p>{message}</p>
}