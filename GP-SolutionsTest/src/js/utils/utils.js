export const getFirstObjectVal = (obj) => {
  const firstKey = Object.keys(obj)[0];

  return obj[firstKey];
};