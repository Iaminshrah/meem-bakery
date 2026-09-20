export function formatPrice(amount: number) {
  return `Rs. ${new Intl.NumberFormat("en-PK").format(amount)}`;
}
