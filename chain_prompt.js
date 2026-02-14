// Converts a string to kebab-case format
function toKebabCase(input) {
  // Step 1: Validate the input
  if (input == null) return '';
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Step 2: Normalize the string
  let str = input.trim(); // Trim whitespace
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2'); // Handle camelCase boundaries
  str = str.replace(/[_\s]+/g, '-'); // Replace spaces and underscores with hyphens
  str = str.toLowerCase(); // Convert to lowercase

  // Step 3: Finalize the output
  str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric except hyphens
  str = str.replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
  str = str.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  return str;
}

// Converts a string to kebab-case format
function toKebabCase(input) {
  // Step 1: Validate the input
  if (input == null) return '';
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Step 2: Normalize the string
  let str = input.trim(); // Trim whitespace
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2'); // Handle camelCase boundaries
  str = str.replace(/[_\s]+/g, '-'); // Replace spaces and underscores with hyphens
  str = str.toLowerCase(); // Convert to lowercase

  // Step 3: Finalize the output
  str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric except hyphens
  str = str.replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
  str = str.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  return str;
}