export default function cleanSet(set, startString) {
  const list = [];

  if (typeof set !== 'object' || typeof startString !== 'string'
    || startString.length === 0) {
    return '';}

  // returns string created by joining all elements
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
