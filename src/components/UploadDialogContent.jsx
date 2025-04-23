import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useDropZoneStore, handleFilenameChange, handleRetailerChange } from '../store';

export default function UploadDialogContent() {
  const retailerId = useDropZoneStore(state => state.retailerId);
  const filename = useDropZoneStore(state => state.filename);

  return (
    <>
      <p>Select a retailer from the list below:</p>
      <FormControl fullWidth>
        <InputLabel size='small' id='hw-retailer-select'>Select Retailer</InputLabel>
        <Select
          size='small'
          label='Select Retailer'
          labelId='hw-retailer-select'
          value={retailerId}
          onChange={handleRetailerChange}>
          <MenuItem value='Ace'>Ace Hardware</MenuItem>
          <MenuItem value='Amazon'>Amazon</MenuItem>
          <MenuItem value="Blan's ID">Blain's Farm and Fleet</MenuItem>
          <MenuItem value='DIB'>Do It Best</MenuItem>
          <MenuItem value='EL ID'>E.L. Mustee</MenuItem>
          {/* <MenuItem value=''>Horizon</MenuItem> */}
          {/* <MenuItem value='HD Supply ID'>HD Supply</MenuItem> */}
          <MenuItem value='John Schulz ID'>John L. Schultz</MenuItem>
          <MenuItem value="Lowe's">Lowe's</MenuItem>
          <MenuItem value='Menards'>Menards</MenuItem>
          {/* <MenuItem value=''>Orgill</MenuItem> */}
          <MenuItem value='Sams Club ID'>Sam's Club</MenuItem>
          <MenuItem value='Target ID'>Target</MenuItem>
          <MenuItem value='THD'>The Home Depot</MenuItem>
          <MenuItem value='Tractor Supply ID'>Tractor Supply</MenuItem>
          <MenuItem value='TV ID'>True Value</MenuItem>
          <MenuItem value='Walmart ID'>Walmart</MenuItem>
          <MenuItem value='Wayfair'>Wayfair</MenuItem>
        </Select>
      </FormControl>
      <p style={{ marginTop: '30px' }}>
        You may optionally change the name of the file that will be downloaded by modifying the file name in the field below:
      </p>
      <TextField 
        fullWidth
        size='small'
        label='Download File Name'
        onChange={handleFilenameChange}
        value={filename} />
    </>
  );
}