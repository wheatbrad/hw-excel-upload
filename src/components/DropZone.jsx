import { 
  useStore,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop
} from '../store';

const statefulCSSClasses = [
  'hw-dropzone',
  'hw-dropzone hw-dropzone--border',
  'hw-dropzone hw-dropzone--accept',
  'hw-dropzone hw-dropzone--warn'
];

export default function DropZone({ children }) {
  const level = useStore(state => state.level);

  return (
    <div
      className={statefulCSSClasses[level]}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
}