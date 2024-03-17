export function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
}
export function extractTags(str) {
  return str.split(",").join(", ");
}
export function textConverted(str) {
  return str.replace(/\n/g, "<br />");
}
