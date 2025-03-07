/**
 * Determines if target element from event is within 
 * the bounds of defined drop target.
 * 
 * @param {DragEvent} event 
 * @returns {boolean}
 */
export function inDropZone(event) {
  let t = event.target;

  while (t !== null) {
    if (t.id === 'hw-file-dropzone') return true; 
    t = t.parentElement;
  }

  return false;
}

/**
 * Update function setting Zustand state to warn user 
 * only accepting one file upload at a time.
 * 
 * @param {object} state Zustand state
 * @returns {void}
 */
export function warnMultipleFiles(state) {
  return {
    ...state,
    style: 'hw-dropzone hw-dropzone--warn',
    message: 'One file at a time please'
  };
}

/**
 * Update function setting Zustand state to warn user 
 * only accepting Office Open XML Excel (XLSX) files.
 * 
 * @param {object} state Zustand state
 * @returns {void}
 */
export function warnUnacceptableFile(state) {
  return {
    ...state,
    style: 'hw-dropzone hw-dropzone--warn',
    message: 'Must be an Excel file'
  };
}

/**
 * Update function setting Zustand state to notify 
 * user that file is of expected type.
 * 
 * @param {object} state Zustand state
 * @returns {void}
 */
export function acceptableFile(state) {
  return {
    ...state,
    style: 'hw-dropzone hw-dropzone--accept',
    message: 'Great! Drop that file'
  };
}

/**
 * Update function setting Zustand state to indicate to user
 * the location and dimension of drop target element.
 * 
 * @param {object} state Zustand state
 * @returns {void}
 */
export function highlightDropzone(state) {
  return {
    ...state,
    style: 'hw-dropzone hw-dropzone--border',
    message: 'Drag file into the outlined area'
  };
}
