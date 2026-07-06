export interface BookingFields {
  name: string;
  organisation?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  budget?: string;
  message?: string;
}

export function buildBookingLines(
  fields: BookingFields,
  heading: string
): string[] {
  return [
    `*${heading}*`,
    "",
    `Name: ${fields.name}`,
    `Organisation: ${fields.organisation || "—"}`,
    `Email: ${fields.email || "—"}`,
    `Phone/WhatsApp: ${fields.phone || "—"}`,
    `Service Needed: ${fields.service || "—"}`,
    `Event/Project Date: ${fields.date || "—"}`,
    `Budget Range: ${fields.budget || "—"}`,
    "",
    `Message: ${fields.message || "—"}`,
  ];
}

export function buildWhatsAppUrl(
  whatsappLink: string,
  fields: BookingFields,
  heading: string
): string {
  const text = buildBookingLines(fields, heading).join("\n");
  return `${whatsappLink}?text=${encodeURIComponent(text)}`;
}
