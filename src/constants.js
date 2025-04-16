/**
 * Homewerks API endpoint base.
 * 
 * @var {string}
 */
export const API_ENDPOINT_ROOT = 'https://api.ocozzio.test/homewerks';

/**
 * File type user is expected to upload.
 * 
 * @type {string}
 */
export const UPLOAD_EXPECTED_FILE_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

/**
 * Enum defining UI messages identified by message code.
 * 
 * @enum {string}
 */
export const MSG_CODE = Object.create(null, {
  0: { value: 'Drag file into the outlined area' },
  1: { value: 'Great! Drop that file' },
  2: { value: 'One file at a time please' },
  3: { value: 'Must be an Excel file' },
  4: { value: 'Excel file incorrectly formatted' },
  5: { value: 'Excel file missing expected data' },
});

/**
 * Enum identifying UI message by error.
 * 
 * @enum {string}
 */
export const Msg = Object.create(null, {
  NOT_IN_ZONE:       { value: MSG_CODE[0] },
  VALID:             { value: MSG_CODE[1] },
  MULTIPLE_FILES:    { value: MSG_CODE[2] },
  UNACCEPTABLE_FILE: { value: MSG_CODE[3] },
  INVALID_FORMAT:    { value: MSG_CODE[4] },
  NO_DATA:           { value: MSG_CODE[5] }
});
