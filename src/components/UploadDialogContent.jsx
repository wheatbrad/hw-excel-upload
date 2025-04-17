import { TextField } from '@mui/material';
import { useDropZoneStore, handleFilenameChange } from '../store';

export default function UploadDialogContent() {
  const filename = useDropZoneStore(state => state.filename);

  return (
    <>
      <p style={{ marginBottom: '40px' }}>
        You may optionally change the name of the file that will be downloaded by modifying the file name in the field below.
      </p>
      <TextField 
        fullWidth
        label='Download File Name'
        onChange={handleFilenameChange}
        value={filename} />
    </>
  );
}