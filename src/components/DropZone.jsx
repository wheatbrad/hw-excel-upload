import { 
  useDropZoneStore,
  handleDragOverZone,
  handleDropInZone
} from '../store';

const statefulCSSClasses = [
  'hw-dropzone',
  'hw-dropzone hw-dropzone--border',
  'hw-dropzone hw-dropzone--warn',
  'hw-dropzone hw-dropzone--accept'
];

export default function DropZone({ children }) {
  const level = useDropZoneStore(state => state.level);

  return (
    <div
      className={statefulCSSClasses[level]}
      onDrop={handleDropInZone}
      onDragOver={handleDragOverZone}
    >
      {children}
    </div>
  );
}