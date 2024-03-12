export default function hasValuesFromArray(set, array) {
  // returns a boolean if all the elements in the array exist within the set
  const hasElements = array.every((value) => set.has(value));
  return hasElements;
}
