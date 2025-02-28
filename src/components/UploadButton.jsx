import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { handleButtonFileUpload } from '../store';

const VisuallyHiddenInput = styled('input') ({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

export default function UploadButton() {
  
  return (
    <Button
      role='button'
      component='label'
      variant='contained'
      sx={{ my: 3 }}
      disableElevation
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Excel File
      <VisuallyHiddenInput
        type='file'
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleButtonFileUpload}
      />
    </Button>
  );
}