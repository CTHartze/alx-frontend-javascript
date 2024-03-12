export default function cleanSet(set, startString) {
  const list = [];

  if (typeof set !== 'object' || typeof startString !== 'string'
    || startString.length === 0) {
    return '';}

  const stringSet = [];
  [..._set].forEach((x) => {
    if (x && x.indexOf(startString) === 0) stringSet.push(x.replace(startString, ''));
  });
  return stringSet.join('-');
}
