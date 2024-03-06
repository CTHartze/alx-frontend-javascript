// Write and export a function that accepts two arguments
// Return the value returned by the promise that resolved the first

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
