import { useDropZoneStore, handleDrop } from '../store';

export default function DropZone({ children }) {
  const style = useDropZoneStore(state => state.style);

  return (
    <div
      id='hw-file-dropzone'
      className={style}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}