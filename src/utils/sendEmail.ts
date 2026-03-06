import emailjs from '@emailjs/browser';

// EmailJS configuration - replace these with your actual IDs after setup
const SERVICE_ID = 'service_schweinswale';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const TEMPLATE_IDS = {
  kontakt: 'template_kontakt',
  sichtung: 'template_sichtung',
  foerdermitgliedschaft: 'template_foerder',
  patenschaft: 'template_patenschaft',
} as const;

type FormType = keyof typeof TEMPLATE_IDS;

export async function sendEmail(formType: FormType, templateParams: Record<string, string>) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_IDS[formType],
    {
      ...templateParams,
      to_email: 'info@walschutz.org',
    },
    PUBLIC_KEY,
  );
}
