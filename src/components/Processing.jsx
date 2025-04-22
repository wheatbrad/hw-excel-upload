import { Backdrop, CircularProgress } from '@mui/material';
import { useDropZoneStore } from '../store';

export default function Processing() {
  const showProcessing = useDropZoneStore(state => state.showProcessing);
  
  return (
    <Backdrop open={showProcessing}>
      <CircularProgress />
    </Backdrop>
  );
}