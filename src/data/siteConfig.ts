/**
 * ============================================
 * SITE CONFIGURATION
 * ============================================
 * Edit this file to customize the template for your organization.
 * All site-wide settings (name, address, meta, etc.) live here.
 */

export const siteConfig = {
  /** The main name displayed in the navbar, hero, and footer */
  siteName: "Secta Banditos",

  /** Subtitle shown below the name in the navbar */
  siteSubtitle: "Página Oficial",

  /** Motto/tagline shown in the hero badge */
  siteMotto: "Stay Alive |-/",

  /** Default meta description for SEO */
  siteDescription:
    "Secta Banditos, una comunidad de fans incondicionales de Twenty One Pilots. Únete a nosotros para encuentros, merchandising y recuerdos de eventos, conciertos, y más.",

  /** Base URL for Open Graph / canonical links */
  siteUrl: "https://secta-banditos.vercel.app",

  /** Path to Open Graph image (relative to /public) */
  ogImage: "/og-image.jpg",

  /** Headquarters / address shown in the footer */
  address: {
    line1: "Dema", 
    line2: "Mexico",
  },

  /** Footer copyright text */
  copyright: "Secta Banditos Project — 2026",

  /** Footer disclaimer text */
  disclaimer:
    "Este sitio fue creado únicamente por parte del clique de Secta Banditos.",

  /** Navigation links — jumping to the specific sections on the homepage */
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#meetings", label: "Meetings" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#merch", label: "Fan Merch" },
  ],
};