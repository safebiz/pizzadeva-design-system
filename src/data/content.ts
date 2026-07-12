/* =========================================================================
   Conținut REAL Pizza Deva. NU lorem ipsum, NU recenzii fabricate.
   Sursă: pizza-deva.ro (live) + projects/pizzadeva/strategy.md.
   Prețuri combo = EXEMPLU (de confirmat din meniul real).
   ========================================================================= */

export const brand = {
  name: 'Pizza Deva',
  tagline: 'Pizza cu suflet din Deva.',
  motto: 'Pizza proaspătă, livrată în 60 de minute.',
  differentiator: 'Preparată manual în fiecare zi, din ingrediente proaspete.',
}

export const hero = {
  headline: 'Pizza livrată la ușa ta',
  subheadline:
    'Pizza proaspătă, preparată cu pasiune și ingrediente proaspete. Livrare gratuită în Deva, în 60 de minute.',
  ctaPrimary: 'Comandă acum',
  ctaSecondary: 'Vezi meniul',
}

/* Trust strip — promisiunile Pizza Deva */
export const promises = [
  { icon: '🚚', text: 'Livrare gratuită în Deva' },
  { icon: '⏱️', text: 'În 60 de minute' },
  { icon: '👨‍🍳', text: 'Preparată manual zilnic' },
  { icon: '🥬', text: 'Ingrediente proaspete' },
]

export const story =
  'Pizza Deva e pizza cu suflet din Deva. Frământăm aluatul dimineața, cu timp și răbdare — asta e secretul crustei pufoase la interior și crocante la exterior. Preparăm fiecare pizza manual, din ingrediente proaspete, și o livrăm caldă la ușa ta.'

/* ---- Meniu (grupat pe categorii — folosit de ServicesOverview) --------- */
export type ServiceStatus = 'live' | 'ready' | 'blocked'
export interface Service {
  slug: string
  icon: string
  title: string
  text: string
  status: ServiceStatus
}
export interface ServiceGroup {
  category: string
  blurb: string
  services: Service[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    category: 'Pizza clasică',
    blurb: 'Rețetele care nu dau greș niciodată.',
    services: [
      { slug: 'margherita', icon: '🍕', title: 'Margherita', text: 'Sos de roșii, mozzarella și busuioc proaspăt. Simplă și perfectă.', status: 'live' },
      { slug: 'prosciutto', icon: '🍕', title: 'Prosciutto', text: 'Șuncă, mozzarella și sos de roșii — clasicul iubit de toți.', status: 'live' },
      { slug: 'quattro-formaggi', icon: '🧀', title: 'Quattro Formaggi', text: 'Patru brânzeturi topite perfect, pentru pofticioși.', status: 'live' },
    ],
  },
  {
    category: 'Pizza specială',
    blurb: 'Pentru cei care vor ceva cu caracter.',
    services: [
      { slug: 'diavola', icon: '🌶️', title: 'Diavola', text: 'Salam picant, ardei iute și mozzarella topită. Pentru iubitorii de picant.', status: 'live' },
      { slug: 'capricciosa', icon: '🍕', title: 'Capricciosa', text: 'Șuncă, ciuperci, măsline și anghinare — bogată și echilibrată.', status: 'live' },
      { slug: 'quattro-stagioni', icon: '🍕', title: 'Quattro Stagioni', text: 'Cele patru anotimpuri, fiecare sfert cu gustul lui.', status: 'live' },
    ],
  },
  {
    category: 'Alături de pizza',
    blurb: 'Completează comanda cu tot ce-ți trebuie.',
    services: [
      { slug: 'garnituri', icon: '🍟', title: 'Garnituri', text: 'Cartofi prăjiți, aripioare și salate proaspete.', status: 'live' },
      { slug: 'sosuri', icon: '🧄', title: 'Sosuri', text: 'Usturoi, picant sau sosul casei — alege-ți preferatul.', status: 'live' },
      { slug: 'bauturi', icon: '🥤', title: 'Băuturi', text: 'Răcoritoare, apă și bere rece — livrate odată cu pizza.', status: 'live' },
    ],
  },
]

export const flagship = {
  title: 'Livrare gratuită în toată Deva',
  text: 'Comanzi de pe pizza-deva.ro sau la telefon, iar noi îți aducem pizza caldă la ușă în 60 de minute — fără cost de livrare.',
}

export const services: Service[] = serviceGroups.flatMap((g) => g.services)

/* ---- Combo-uri / Meniuri (folosite de PricingPlans) -------------------- */
export interface Plan {
  name: string
  price: string
  period: string
  tagline: string
  highlight: boolean
  features: string[]
}
export const plans: Plan[] = [
  {
    name: 'Meniu Solo',
    price: '39',
    period: 'comandă',
    tagline: 'Perfect pentru o persoană.',
    highlight: false,
    features: ['1 pizza la alegere', '1 băutură răcoritoare', 'Livrare gratuită în Deva'],
  },
  {
    name: 'Meniu Familie',
    price: '119',
    period: 'comandă',
    tagline: 'Cel mai comandat — pentru toată familia.',
    highlight: true,
    features: ['3 pizza la alegere', '1 garnitură', '2 băuturi', 'Livrare gratuită în Deva'],
  },
  {
    name: 'Meniu Party',
    price: '199',
    period: 'comandă',
    tagline: 'Pentru grupuri și petreceri acasă.',
    highlight: false,
    features: ['5 pizza la alegere', '2 garnituri', 'Băuturi pentru grup', 'Livrare gratuită în Deva'],
  },
]
export const plansNote =
  'Prețuri exemplu — actualizează cu meniul real Pizza Deva. Comenzi: pizza-deva.ro sau 0722 807 994.'

/* ---- Oferta săptămânii (folosită de AuditLanding) ---------------------- */
export const auditLanding = {
  eyebrow: 'Oferta săptămânii',
  headline: 'Marți = Pizza Zi 🍕',
  subtext:
    'Comandă 2 pizza preferate și primești o limonadă cadou. Valabil marțea, până la ora 21:00 — nu lăsa oferta să expire.',
  checklistTitle: 'Ce include oferta',
  checklist: [
    '2 pizza la alegere din meniu',
    '1 limonadă cadou',
    'Livrare gratuită în Deva',
    'Livrată caldă, în 60 de minute',
  ],
  cta: 'Comandă oferta',
}

/* ---- FAQ (food) -------------------------------------------------------- */
export const faqs = [
  { q: 'Cât durează livrarea?', a: 'În medie 60 de minute în Deva. În weekend comandă din timp — se aglomerează.' },
  { q: 'Livrarea e gratuită?', a: 'Da, livrare gratuită în toată Deva.' },
  { q: 'Cum comand?', a: 'Direct pe pizza-deva.ro sau telefonic la 0722 807 994.' },
  { q: 'Ce program aveți?', a: 'Luni–Sâmbătă, între 10:00 și 21:00.' },
  { q: 'De unde sunt ingredientele?', a: 'Preparăm manual în fiecare zi, cu ingrediente proaspete.' },
  { q: 'Cum pot plăti?', a: 'Detaliile de plată le găsești în pagina de comandă de pe pizza-deva.ro.' },
]

/* ---- Testimoniale ------------------------------------------------------
   PLACEHOLDER. Pizza Deva are recenzii reale pe Google Maps + Facebook —
   înlocuiește cu recenzii reale (cu acordul clientului) înainte de publicare.
   ------------------------------------------------------------------------ */
export const testimonials = [
  { name: '(Nume client — de completat)', role: 'Client Deva', quote: '(Recenzie reală din Google/Facebook — de completat înainte de publicare.)' },
  { name: '(Nume client — de completat)', role: 'Client Deva', quote: '(Recenzie reală din Google/Facebook — de completat înainte de publicare.)' },
  { name: '(Nume client — de completat)', role: 'Client Deva', quote: '(Recenzie reală din Google/Facebook — de completat înainte de publicare.)' },
]

/* ---- Email marketing template (mockup de brand) ------------------------ */
export const emailTemplate = {
  subject: '🍕 Marți = Pizza Zi la Pizza Deva',
  preheader: '2 pizza + o limonadă cadou, azi până la ora 21:00.',
  eyebrow: 'Oferta săptămânii',
  headline: 'Marți = Pizza Zi 🍕',
  greeting: 'Salut,',
  body: [
    'Astăzi te răsfățăm: comandă 2 dintre pizzele tale preferate și primești o limonadă cadou.',
  ],
  bullets: [
    '2 pizza la alegere din meniu',
    '1 limonadă cadou',
    'Livrare gratuită în Deva, în 60 de minute',
  ],
  closing: 'Valabil azi, până la ora 21:00. Nu lăsa oferta să expire 😉',
  cta: 'Comandă acum',
  signature: 'Echipa Pizza Deva',
  footerAddress: 'Pizza Deva · Str. Împăratul Traian 34, Deva · 0722 807 994',
  unsubscribe: 'Primești acest email pentru că ești abonat la Pizza Deva. Te poți dezabona oricând.',
}

export const footerLinks = {
  servicii: [
    { label: 'Pizza clasică', href: '/#meniu' },
    { label: 'Pizza specială', href: '/#meniu' },
    { label: 'Combo & Meniuri', href: '/#combo' },
    { label: 'Băuturi & garnituri', href: '/#meniu' },
  ],
  legal: [
    { label: 'Comandă online', href: '/comanda' },
    { label: 'Livrare și retur', href: '/livrare-retur' },
    { label: 'Termeni și condiții', href: '/termeni-si-conditii' },
    { label: 'Politica de confidențialitate', href: '/politica-de-confidentialitate' },
  ],
}
