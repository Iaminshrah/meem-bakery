const WHATSAPP_NUMBER = "923167737208";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
