import { create } from 'zustand';
import { DZ_STATE, UPLOAD_EXPECTED_FILE_TYPE } from './constants';

const intialState = {
  level: DZ_STATE.READY,
  message: "\u00A0"
};

export const useDropZoneStore = create(() => intialState);

/**
 * Handle dropzone state change when user first drags element on page.
 * 
 * @param {DragEvent} event The dragover event is fired when an element 
 * or text selection is being dragged over a valid drop target 
 * (every few hundred milliseconds).
 */
export const handleDragOverWindow = (event) => {
  event.preventDefault();
  const level = useDropZoneStore.getState().level;

  if (level === DZ_STATE.PROMPT) {
    event.dataTransfer.dropEffect = 'none';
  }

  if (level === DZ_STATE.READY) {
    useDropZoneStore.setState({
      level: DZ_STATE.PROMPT,
      message: 'Drop file inside the outlined box'
    }, true);
  }
}

/**
 * Handle dropzone state change when user drags element out 
 * of browser window.
 * 
 * @param {DragEvent} event The dragleave event is fired when 
 * a dragged element or text selection leaves a valid drop target.
 */
export const handleDragLeaveWindow = (event) => {
  event.preventDefault();
  useDropZoneStore.setState(intialState, true);
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
  event.dataTransfer.dropEffect = 'copy';

  if (useDropZoneStore.getState().level === DZ_STATE.ACCEPT) {
    const filename = event.dataTransfer.files[0].name;
    alert(`Accepted file named ${filename}, uploading...`);

    // TODO: will need uploading notice
    useDropZoneStore.setState(intialState, true);
  }
} 

/**
 * This method included for completeness.
 * 
 * @param {DragEvent} event The dragenter event is fired when a dragged 
 * element or textselection enters a valid drop target. The target object 
 * is the immediate user selection (the element directly indicated by the 
 * user as the drop target), or the `<body>` element.
 */
export const handleDragEnter = (event) => {
  event.preventDefault();
  // event.dataTransfer.dropEffect = 'none';
}

/**
 * Handle dropzone state change when user drags element out of dropzone.
 * 
 * @param {DragEvent} event The dragleave event is fired when 
 * a dragged element or text selection leaves a valid drop target.
 */
export const handleDragLeave = (event) => {
  event.preventDefault();

  useDropZoneStore.setState({
    level: DZ_STATE.PROMPT,
    message: 'Where you going?! Drop file HERE'
  }, true);
}

/**
 * Handle dropzone state change when user drags element out over dropzone.
 * 
 * @param {DragEvent} event The dragover event is fired when an element 
 * or text selection is being dragged over a valid drop target 
 * (every few hundred milliseconds).
 */
export const handleDragOver = (event) => {
  event.preventDefault();

  let level = DZ_STATE.ACCEPT;
  let message = 'Great! Now drop that file';
  const dataTransfer = event.dataTransfer;
  dataTransfer.dropEffect = 'copy';

  // Check to make sure dragged file is acceptable
  if (dataTransfer.items.length > 1) {
    level = DZ_STATE.WARN;
    message = 'One file at a time please'
    dataTransfer.dropEffect = 'none';
  } else if (dataTransfer.items[0].type !== UPLOAD_EXPECTED_FILE_TYPE) {
    level = DZ_STATE.WARN;
    message = 'Must be an Excel file'
    dataTransfer.dropEffect = 'none';
  }

  if (useDropZoneStore.getState().level === DZ_STATE.PROMPT) {
    useDropZoneStore.setState({
      level: level,
      message: message
    }, true);
  }
}

/**
 * Handle file upload when user clicks file input button.
 * 
 * @param {Event} event Change event fired when user explicitly selects 
 * a file from the file picker.
 */
export const handleButtonFileUpload = (event) => {
  event.preventDefault();
  const file = event.target.files[0];

  if (file.type !== UPLOAD_EXPECTED_FILE_TYPE) {
    useDropZoneStore.setState({
      level: DZ_STATE.WARN,
      message: 'Must be an Excel file'
    }, true);
  } else {
    alert(`Accepted file named ${file.name}, uploading...`);
  }
}