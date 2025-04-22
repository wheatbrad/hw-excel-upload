import { Backdrop, CircularProgress, Portal } from '@mui/material';
import { useDropZoneStore } from '../store';

export default function Processing() {
  const showProcessing = useDropZoneStore(state => state.showProcessing);
  
  return (
    <Portal container={() => document.getElementsByTagName('html')[0]}>
      <Backdrop open={showProcessing}>
        <CircularProgress />
      </Backdrop>
    </Portal>
  );
}