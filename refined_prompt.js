/**
 * Converts a string to camelCase format.
 *
 * Handles strings with spaces, underscores, hyphens, or mixed delimiters.
 * Normalizes uppercase and lowercase input correctly.
 * Trims leading and trailing whitespace.
 * Throws an error if the input is not a string.
 * Returns an empty string for empty, null, or undefined input.
 *
 * Examples:
 *   toCamelCase("first name")      // "firstName"
 *   toCamelCase("USER_ID")        // "userId"
 *   toCamelCase(" mobile-number ")// "mobileNumber"
 *   toCamelCase(123)               // throws Error
 *
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If input is not a string.
 */
// Converts a string to camelCase with robust error handling
function toCamelCase(input) {
  if (input == null) return '';
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  const str = input.trim();
  if (str === '') return '';
  return str
    .replace(/[_\-]+/g, ' ')           // Replace underscores and hyphens with spaces
    .replace(/([A-Z]+)/g, (m) => m.toLowerCase()) // Lowercase all uppercase words
    .split(/\s+/)                      // Split by spaces
    .map((word, idx) => {
      if (idx === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * Converts a string to dot.case format.
 *
 * Handles strings with spaces, underscores, hyphens, camelCase, or mixed delimiters.
 * Normalizes uppercase and lowercase input correctly.
 * Trims leading and trailing whitespace.
 * Throws an error if the input is not a string.
 * Returns an empty string for empty, null, or undefined input.
 *
 * Examples:
 *   toDotCase("first name")      // "first.name"
 *   toDotCase("USER_ID")        // "user.id"
 *   toDotCase(" mobile-number ")// "mobile.number"
 *   toDotCase("screenName")     // "screen.name"
 *   toDotCase(123)               // throws Error
 *
 * @param {string} input - The string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If input is not a string.
 */
// Converts a string to dot.case format
function toDotCase(input) {
  if (input == null) return '';
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  const str = input.trim();
  if (str === '') return '';
  return str
    .replace(/[_\-]+/g, ' ')           // Replace underscores and hyphens with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Handle camelCase boundaries
    .toLowerCase()
    .split(/\s+/)                      // Split by spaces
    .join('.');
}
