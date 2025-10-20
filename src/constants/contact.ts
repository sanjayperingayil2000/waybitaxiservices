/**
 * Contact information constants
 * Update these values to customize your contact details
 */

export const CONTACT_INFO = {
  phone: '+919876543210',
  whatsapp: '+919876543210',
  email: 'info@waybi.com',
  address: 'India',
  whatsappMessage: 'Hi%20WayBi,%20I%20want%20to%20book%20a%20ride.',
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${CONTACT_INFO.whatsappMessage}`

export const PHONE_URL = `tel:${CONTACT_INFO.phone}`

export const EMAIL_URL = `mailto:${CONTACT_INFO.email}`
