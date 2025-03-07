import { useEffect } from 'react';
import { handleDragLeave, handleDragOver } from './store';
import { HomewerksTheme } from './theme';
import DropZone from './components/DropZone';
import DropZoneText from './components/DropZoneText';
import UploadButton from './components/UploadButton';
import DropZoneMessage from './components/DropZoneMessage';

export default function App() {
  useEffect(() => {
    document.addEventListener('dragleave', handleDragLeave);
    document.addEventListener('dragover', handleDragOver);
  },[]);

  return (
    <HomewerksTheme>
      <DropZone>
        <DropZoneText />
        <UploadButton />
        <DropZoneMessage />
      </DropZone>
    </HomewerksTheme>
  );
}
