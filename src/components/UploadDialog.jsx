import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
  
} from '@mui/material';
import {
  postFileForProcessing,
  resetDropZoneStore,
  useDropZoneStore
} from '../store';

export default function UploadDialog({ children }) {
  const showConfirmDialog = useDropZoneStore(state => state.showConfirmDialog);

  return (
    <Dialog open={showConfirmDialog} maxWidth='xs'>
      <DialogTitle>
        Confirm Excel File Upload
      </DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button 
          variant='outlined'
          onClick={resetDropZoneStore}>
          Cancel
        </Button>
        <Button 
          variant='contained'
          onClick={postFileForProcessing} 
          autoFocus>
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
}