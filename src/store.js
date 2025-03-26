import { create } from 'zustand';
import { UPLOAD_EXPECTED_FILE_TYPE } from './constants';
import {
  acceptableFile,
  highlightDropzone,
  inDropZone,
  warnMultipleFiles,
  warnUnacceptableFile
} from './functions';

const initialState = {
  style: 'hw-dropzone',
  message: "\u00A0",
  file: null
};

export const useDropZoneStore = create(() => initialState);

export const resetDropZoneStore = () => {
  useDropZoneStore.setState(initialState, true);
}

/**
 * Handle dropzone state change when user drags element on / over page.
 * 
 * @param {DragEvent} event The dragover event is fired when an element 
 * or text selection is being dragged over a valid drop target 
 * (every few hundred milliseconds).
 */
export const handleDragOver = (event) => {
  event.preventDefault();

  if (inDropZone(event)) {
    // Check to make sure dragged file is acceptable
    if (event.dataTransfer.items.length > 1) {
      event.dataTransfer.dropEffect = 'none';
      useDropZoneStore.setState(warnMultipleFiles);
    } else if (event.dataTransfer.items[0].type !== UPLOAD_EXPECTED_FILE_TYPE) {
      event.dataTransfer.dropEffect = 'none';
      useDropZoneStore.setState(warnUnacceptableFile);
    } else {
      event.dataTransfer.dropEffect = 'copy';
      useDropZoneStore.setState(acceptableFile);
    }
  } else {
    // Not in drop zone, prompt user to drag into zone
    event.dataTransfer.dropEffect = 'none';
    useDropZoneStore.setState(highlightDropzone);
  }
}

/**
 * Handle dropzone state change when user drags element out 
 * of browser window.
 * 
 * @param {DragEvent} event The dragleave event is fired when 
 * a dragged element or text selection leaves a valid drop target.
 */
export const handleDragLeave = (event) => {
  event.preventDefault();

  if (
    event.target === document.body ||
    event.target === document.documentElement
  ) {
    resetDropZoneStore();
  }
}

/**
 * Handle dropzone state change and POST accepted file to server 
 * when user drops file on dropzone element.
 * 
 * @param {DragEvent} event The drop event is fired when an element 
 * or text selection is dropped on a valid drop target. To ensure 
 * that the drop event always fires as expected, you should always 
 * include a preventDefault() call in the part of your code which 
 * handles the dragover event.
 */
export const handleDrop = (event) => {
  event.preventDefault();

  // Check to make sure dragged file is acceptable
  if (event.dataTransfer.items.length > 1) {
    event.dataTransfer.dropEffect = 'none';
    useDropZoneStore.setState(warnMultipleFiles);
  } else if (event.dataTransfer.items[0].type !== UPLOAD_EXPECTED_FILE_TYPE) {
    event.dataTransfer.dropEffect = 'none';
    useDropZoneStore.setState(warnUnacceptableFile);
  } else {
    // Have a valid file
    useDropZoneStore.setState({
      style: 'hw-dropzone hw-dropzone--accept',
      message: '',
      file: event.dataTransfer.files[0]
    }, true);
  }
}

/**
 * Handle file upload when user clicks file input button.
 * 
 * @param {Event} Event Change event fired when user explicitly selects 
 * a file from the file picker.
 */
export const handleButtonFileUpload = (event) => {
  event.preventDefault();
  const file = event.target.files[0];

  if (file.type !== UPLOAD_EXPECTED_FILE_TYPE) {
    useDropZoneStore.setState(warnUnacceptableFile);
  } else {
    useDropZoneStore.setState({
      style: 'hw-dropzone hw-dropzone--accept',
      message: '',
      file: file
    }, true);
  }
}