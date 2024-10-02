export function isEmpty(variable:any) {
  return (
    variable === undefined ||
    variable === null ||
    (typeof variable === 'string' && variable.trim() === '') ||
    (Array.isArray(variable) && variable.length === 0)
  );
}