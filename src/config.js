export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const CONTACT = {
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
  location: import.meta.env.VITE_CONTACT_LOCATION || '',
};

export const SOCIAL = {
  github: import.meta.env.VITE_GITHUB_URL || '',
  githubProfile: import.meta.env.VITE_GITHUB_PROFILE_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
};
