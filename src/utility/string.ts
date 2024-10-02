export function isJSON(str:string) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

export const isNumeric = (str: string): boolean => {
  // Use a regular expression to test if the string contains only digits
  return /^\d+$/.test(str);
};