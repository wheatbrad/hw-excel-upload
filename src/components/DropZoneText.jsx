import { useStore } from '../store';

export default function DropZoneText() {
  const message = useStore(state => state.message);

  return (
    <p>{message}</p>
  );
}