/**
 * Homewerks API endpoint base.
 * 
 * @var {string}
 */
export const API_ENDPOINT_ROOT = 'https://api.ocozzio.com/homewerks';

/**
 * File type user is expected to upload.

 * @type {string}
 */
export const DZ_EXPECTED_FILE_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

/**
 * Enum defining possible drop zone states:
 *   - [0] READY  - Drop zone default state, nothing being dragged
 *   - [1] PROMPT - Highlight drop zone area for user
 *   - [2] ACCEPT - Over dropzone, file acceptable for processing
 *   - [3] WARN   - Over dropzone, file not acceptable for processing
 * 
 * @type {Record<string, number>}
 */
export const DZ_STATE = Object.create(null, {
  READY:  { value: 0 },
  PROMPT: { value: 1 },
  ACCEPT: { value: 2 },
  WARN:   { value: 3 }
});
