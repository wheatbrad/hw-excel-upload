import { useEffect } from 'react';
import { handleDragOverWindow, handleDragLeaveWindow } from './store';
import { HomewerksTheme } from './theme';
import DropZone from './components/DropZone';
import DropZoneText from './components/DropZoneText';
import UploadButton from './components/UploadButton';
import DropZoneMessage from './components/DropZoneMessage';

export default function App() {
  useEffect(() => {
    document.addEventListener('dragover', handleDragOverWindow);
    document.addEventListener('dragleave', handleDragLeaveWindow);
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
