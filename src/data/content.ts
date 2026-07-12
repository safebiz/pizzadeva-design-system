/* =========================================================================
   Conținut REAL Pizza Deva. NU lorem ipsum, NU recenzii fabricate.
   Sursă: pizza-deva.ro (live) + poze/ingrediente reale (Drive catering-deva.ro).
   Meniu: 15 pizza cu poză + ingrediente + gramaj REAL (public/products/).
   Prețuri combo = EXEMPLU (de confirmat din meniul real).
   Contact: pizza-deva.ro · 0723 861 994.
   ========================================================================= */

export const brand = {
  name: 'Pizza Deva',
  tagline: 'Pizza cu suflet din Deva.',
  motto: 'Pizza proaspătă, livrată în 60 de minute.',
  differentiator: 'Preparată manual în fiecare zi, din ingrediente proaspete.',
}

export const contact = {
  site: 'pizza-deva.ro',
  phone: '0723 861 994',
  email: 'office@cateringdeva.ro',
  address: 'Str. Împăratul Traian 34, Deva', // de verificat
  hours: 'Luni–Sâmbătă 10:00–21:00',
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

/* ---- Meniu (grupat pe categorii — folosit de ServicesOverview) ---------
   image/ingredients/weight = poze + date REALE (Drive). Masterele hi-res
   rămân în Drive; aici sunt versiuni web-optimizate din public/products/. */
export type ServiceStatus = 'live' | 'ready' | 'blocked'
export interface Service {
  slug: string
  icon: string
  title: string
  text: string
  status: ServiceStatus
  image?: string
  ingredients?: string[]
  weight?: string
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
      { slug: 'margherita', icon: '🍕', title: 'Margherita', text: 'Sos de roșii, mozzarella, busuioc și roșii proaspete. Simplă și perfectă.', status: 'live', image: '/products/margherita.jpg', weight: '430g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Busuioc', 'Roșii'] },
      { slug: 'quattro-formaggi', icon: '🧀', title: 'Quattro Formaggi', text: 'Mozzarella, gorgonzola, brie și parmezan — patru brânzeturi topite perfect.', status: 'live', image: '/products/quattro-formaggi.jpg', weight: '510g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Gorgonzola', 'Brie', 'Parmezan'] },
      { slug: 'prosciutto-crudo', icon: '🍖', title: 'Prosciutto Crudo', text: 'Prosciutto crudo, rucola, roșii și parmezan. Fină și aromată.', status: 'live', image: '/products/prosciutto-crudo.jpg', weight: '540g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Prosciutto crudo', 'Rucola', 'Roșii', 'Parmezan'] },
      { slug: 'bufolla', icon: '🍅', title: 'Bufolla', text: 'Mozzarella bilute, roșii, busuioc și sos pesto — inspirată din caprese.', status: 'live', image: '/products/bufolla.jpg', weight: '500g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Mozzarella bilute', 'Roșii', 'Busuioc', 'Sos pesto'] },
      { slug: 'mortadella', icon: '🥪', title: 'Mortadella', text: 'Mortadela, rucola, roșii și parmezan. Clasic italian, modern.', status: 'live', image: '/products/mortadella.jpg', weight: '540g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Rucola', 'Mortadela', 'Roșii', 'Parmezan'] },
      { slug: 'ton', icon: '🐟', title: 'Ton', text: 'Ton, ceapă roșie și porumb pe blat de mozzarella.', status: 'live', image: '/products/ton.jpg', weight: '560g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Ton', 'Ceapă roșie', 'Porumb'] },
    ],
  },
  {
    category: 'Pizza specială',
    blurb: 'Pentru cei care vor ceva cu caracter.',
    services: [
      { slug: 'diavolo', icon: '🌶️', title: 'Diavolo', text: 'Salam picant, ceapă roșie și mozzarella. Pentru iubitorii de picant.', status: 'live', image: '/products/diavolo.jpg', weight: '460g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam picant', 'Ceapă roșie', 'Civas'] },
      { slug: 'diavolo-gorgonzola', icon: '🌶️', title: 'Diavolo Gorgonzola', text: 'Salam picant și gorgonzola cremoasă — picant cu caracter.', status: 'live', image: '/products/diavolo-gorgonzola.jpg', weight: '500g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam picant', 'Ceapă roșie', 'Gorgonzola'] },
      { slug: 'quattro-formaggi-picanta', icon: '🧀', title: 'Quattro Formaggi Picantă', text: 'Cele patru brânzeturi plus salam picant. Cremoasă și iute.', status: 'live', image: '/products/quattro-formaggi-picanta.jpg', weight: '580g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Gorgonzola', 'Brie', 'Parmezan', 'Roșii', 'Salam picant'] },
      { slug: 'quatro-stagioni', icon: '🍕', title: 'Quattro Stagioni', text: 'Salam, șuncă praga, ciuperci, kapia și măsline.', status: 'live', image: '/products/quatro-stagioni.jpg', weight: '520g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam pizza', 'Șuncă praga', 'Ciuperci', 'Kapia', 'Măsline'] },
      { slug: 'chicken', icon: '🍗', title: 'Chicken', text: 'Piept de pui (pastramă), ciuperci, kapia, măsline și porumb.', status: 'live', image: '/products/chicken.jpg', weight: '570g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Piept de pui (pastramă)', 'Ciuperci', 'Kapia', 'Măsline', 'Porumb'] },
      { slug: 'premium', icon: '⭐', title: 'Premium', text: 'Șuncă, salam, cârnați, ciuperci, roșii, măsline și kapia. Cea mai bogată.', status: 'live', image: '/products/premium.jpg', weight: '600g', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Șuncă', 'Salam', 'Cârnați', 'Ciuperci', 'Roșii', 'Măsline', 'Kapia'] },
      { slug: 'vegetala', icon: '🥬', title: 'Vegetală', text: 'Ciuperci, porumb, măsline, dovlecei, kapia și guacamole — full veggie.', status: 'live', image: '/products/vegetala.jpg', weight: '500g', ingredients: ['Aluat', 'Sos pizza', 'Ciuperci', 'Porumb', 'Măsline', 'Ceapă roșie', 'Kapia', 'Dovlecei', 'Guacamole'] },
    ],
  },
  {
    category: 'Specialități de casă',
    blurb: 'Gust românesc, gătit ca acasă.',
    services: [
      { slug: 'sarmale', icon: '🍲', title: 'Sarmale', text: 'Sarmale de casă în foi de varză, cu carne, orez și mărar.', status: 'live', image: '/products/sarmale.jpg', weight: '50g/bucată', ingredients: ['Varză', 'Ceapă', 'Orez', 'Carne', 'Untură', 'Mărar', 'Sare', 'Piper măcinat', 'Cimbru', 'Bulion', 'Boia'] },
      { slug: 'sarmale-cu-mamaliguta', icon: '🍲', title: 'Sarmale cu Mămăliguță', text: 'Sarmale de casă cu mămăliguță proaspătă. Gust ca la mama acasă.', status: 'live', image: '/products/sarmale-cu-mamaliguta.jpg', weight: '400g', ingredients: ['Sarmale (varză, ceapă, orez, carne, mărar, condimente)', 'Mămăliguță (mălai, apă, ulei, sare)'] },
    ],
  },
  {
    category: 'Alături de pizza',
    blurb: 'Completează comanda cu tot ce-ți trebuie.',
    // TODO: adaugă poze reale pentru sosuri/băuturi din pizza-deva.ro → public/products/
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
  'Prețuri exemplu — actualizează cu meniul real Pizza Deva. Comenzi: pizza-deva.ro sau 0723 861 994.'

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
  { q: 'Cum comand?', a: 'Direct pe pizza-deva.ro sau telefonic la 0723 861 994.' },
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
  footerAddress: 'Pizza Deva · Str. Împăratul Traian 34, Deva · 0723 861 994',
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
