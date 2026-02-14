// Converts a string to camelCase, handling spaces, underscores, hyphens, and uppercase
function toCamelCase(str) {
  return str
    .replace(/[_\-]+/g, ' ')           // Replace underscores and hyphens with spaces
    .replace(/([A-Z]+)/g, (m) => m.toLowerCase()) // Lowercase all uppercase words
    .trim()
    .split(/\s+/)                       // Split by spaces
    .map((word, idx) => {
      if (idx === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}
