export function findItemsOver(items, threshold) {
  return items.filter(item => item.qty > threshold);
}
