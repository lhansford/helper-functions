/**
 * Capitalise the first letter of a string
 */
export function capitalise(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
