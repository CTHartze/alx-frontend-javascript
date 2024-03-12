export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  // sets Int8 value at spec-position
  dataView.setInt8(position, value);

  return dataView;
}
