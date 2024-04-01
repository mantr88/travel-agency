export function formatHotelQuantity(quantity: number): string {
  return quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
