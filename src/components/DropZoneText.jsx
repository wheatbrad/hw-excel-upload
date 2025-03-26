import { API_ENDPOINT_ROOT } from '../constants';

export default function DropZoneText() {

  return (
    <>
      <h1>Upload Excel File</h1>
      <p>Click the button provided below or drag an Excel file into this area to upload an Excel template to be populated with data.</p>
      <p>File must be a <a href="https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/2c5dee00-eff2-4b22-92b6-0738acd4475e" target='_blank' rel='noopener noreferrer'>Microsoft Excel Open XML</a> (XLSX) file with specified columns defined in the template available <a href ={`${API_ENDPOINT_ROOT}/download/excel/template/hw-basic-product-information-template`}><strong>here</strong></a>.</p>
    </>
  );
}