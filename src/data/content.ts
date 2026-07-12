/* =========================================================================
   Conținut REAL Pizza Deva. NU lorem ipsum, NU recenzii fabricate.
   Sursă: pizza-deva.ro (live, plugin Orderable) — meniu + prețuri + poze reale.
   Poze pizza: masterele hi-res din Drive (catering-deva.ro) → public/products/.
   Poze sosuri/băuturi: de pe pizza-deva.ro → public/products/.
   Contact: pizza-deva.ro · 0723 861 994 · office@pizza-deva.ro.
   Livrare: NU gratuită necondiționat — cost calculat la finalizare după adresă.
   ========================================================================= */

export const brand = {
  name: 'Pizza Deva',
  tagline: 'Pizza cu suflet din Deva.',
  motto: 'Pizza proaspătă, livrată în maximum 60 de minute.',
  differentiator: 'Preparată manual în fiecare zi, din ingrediente proaspete.',
}

export const contact = {
  site: 'pizza-deva.ro',
  phone: '0723 861 994',
  email: 'office@pizza-deva.ro',
  address: 'Str. Împăratul Traian 34, Deva, jud. Hunedoara',
  hours: 'Luni–Sâmbătă 10:00–21:00 (duminică închis)',
  lastOrder: 'Ultima comandă: 20:30',
  company: 'AS Crystal SRL',
}

export const hero = {
  headline: 'Pizza livrată la ușa ta',
  subheadline:
    'Pizza proaspătă, preparată manual din ingrediente proaspete. Comandă online — livrăm în Deva și împrejurimi, în maximum 60 de minute.',
  ctaPrimary: 'Comandă acum',
  ctaSecondary: 'Vezi meniul',
}

/* Trust strip — promisiunile Pizza Deva */
export const promises = [
  { icon: '👨‍🍳', text: 'Preparată manual zilnic' },
  { icon: '⏱️', text: 'În maximum 60 de minute' },
  { icon: '🚚', text: 'Livrare în Deva și împrejurimi' },
  { icon: '🥬', text: 'Ingrediente proaspete' },
]

export const story =
  'Pizza Deva e pizza cu suflet din Deva. Frământăm aluatul dimineața, cu timp și răbdare — asta e secretul crustei pufoase la interior și crocante la exterior. Preparăm fiecare pizza manual, din ingrediente proaspete, și o livrăm caldă la ușa ta.'

/* ---- Meniu (grupat pe categorii — folosit de ServicesOverview) ---------
   Prețuri REALE de pe pizza-deva.ro. image/ingredients/weight/price reale. */
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
  price?: string
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
      { slug: 'margherita', icon: '🍕', title: 'Margherita', text: 'Sos de roșii, mozzarella, busuioc și roșii proaspete. Simplă și perfectă.', status: 'live', image: '/products/margherita.jpg', weight: '430g', price: '25 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Busuioc', 'Roșii'] },
      { slug: 'ton', icon: '🐟', title: 'Ton', text: 'Ton, ceapă roșie și porumb pe blat de mozzarella.', status: 'live', image: '/products/ton.jpg', weight: '560g', price: '28 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Ton', 'Ceapă roșie', 'Porumb'] },
      { slug: 'quattro-formaggi', icon: '🧀', title: 'Quattro Formaggi', text: 'Mozzarella, gorgonzola, brie și parmezan — patru brânzeturi topite perfect.', status: 'live', image: '/products/quattro-formaggi.jpg', weight: '510g', price: '35 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Gorgonzola', 'Brie', 'Parmezan'] },
      { slug: 'bufolla', icon: '🍅', title: 'Bufolla', text: 'Mozzarella bilute, roșii, busuioc și sos pesto — inspirată din caprese.', status: 'live', image: '/products/bufolla.jpg', weight: '500g', price: '35 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Mozzarella bilute', 'Roșii', 'Busuioc', 'Sos pesto'] },
      { slug: 'prosciutto-crudo', icon: '🍖', title: 'Prosciutto Crudo', text: 'Prosciutto crudo, rucola, roșii și parmezan. Fină și aromată.', status: 'live', image: '/products/prosciutto-crudo.jpg', weight: '540g', price: '38 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Prosciutto crudo', 'Rucola', 'Roșii', 'Parmezan'] },
      { slug: 'mortadella', icon: '🥪', title: 'Mortadella', text: 'Mortadela, rucola, roșii și parmezan. Clasic italian, modern.', status: 'live', image: '/products/mortadella.jpg', weight: '540g', price: '38 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Rucola', 'Mortadela', 'Roșii', 'Parmezan'] },
    ],
  },
  {
    category: 'Pizza specială',
    blurb: 'Pentru cei care vor ceva cu caracter.',
    services: [
      { slug: 'vegetala', icon: '🥬', title: 'Vegetală', text: 'Ciuperci, porumb, măsline, dovlecei, kapia și guacamole — full veggie.', status: 'live', image: '/products/vegetala.jpg', weight: '500g', price: '25 lei', ingredients: ['Aluat', 'Sos pizza', 'Ciuperci', 'Porumb', 'Măsline', 'Ceapă roșie', 'Kapia', 'Dovlecei', 'Guacamole'] },
      { slug: 'diavolo', icon: '🌶️', title: 'Diavolo', text: 'Salam picant, ceapă roșie și mozzarella. Pentru iubitorii de picant.', status: 'live', image: '/products/diavolo.jpg', weight: '460g', price: '29 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam picant', 'Ceapă roșie', 'Civas'] },
      { slug: 'diavolo-gorgonzola', icon: '🌶️', title: 'Diavolo Gorgonzola', text: 'Salam picant și gorgonzola cremoasă — picant cu caracter.', status: 'live', image: '/products/diavolo-gorgonzola.jpg', weight: '500g', price: '30 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam picant', 'Ceapă roșie', 'Gorgonzola'] },
      { slug: 'chicken', icon: '🍗', title: 'Chicken', text: 'Piept de pui (pastramă), ciuperci, kapia, măsline și porumb.', status: 'live', image: '/products/chicken.jpg', weight: '570g', price: '30 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Piept de pui (pastramă)', 'Ciuperci', 'Kapia', 'Măsline', 'Porumb'] },
      { slug: 'premium', icon: '⭐', title: 'Premium', text: 'Șuncă, salam, cârnați, ciuperci, roșii, măsline și kapia. Cea mai bogată.', status: 'live', image: '/products/premium.jpg', weight: '600g', price: '30 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Șuncă', 'Salam', 'Cârnați', 'Ciuperci', 'Roșii', 'Măsline', 'Kapia'] },
      { slug: 'quatro-stagioni', icon: '🍕', title: 'Quattro Stagioni', text: 'Salam, șuncă praga, ciuperci, kapia și măsline.', status: 'live', image: '/products/quatro-stagioni.jpg', weight: '520g', price: '32 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Salam pizza', 'Șuncă praga', 'Ciuperci', 'Kapia', 'Măsline'] },
      { slug: 'quattro-formaggi-picanta', icon: '🧀', title: 'Quattro Formaggi Picantă', text: 'Cele patru brânzeturi plus salam picant. Cremoasă și iute.', status: 'live', image: '/products/quattro-formaggi-picanta.jpg', weight: '580g', price: '35 lei', ingredients: ['Aluat', 'Sos pizza', 'Mozzarella', 'Gorgonzola', 'Brie', 'Parmezan', 'Roșii', 'Salam picant'] },
    ],
  },
  {
    category: 'Sosuri',
    blurb: 'Alege sosul potrivit pentru feliile tale — 7 lei fiecare.',
    services: [
      { slug: 'sos-grecesc', icon: '🥫', title: 'Sos grecesc', text: 'Sos cremos pe bază de iaurt cu usturoi și ierburi — răcoritor și mediteranean.', status: 'live', image: '/products/sos-grecesc.jpg', price: '7 lei' },
      { slug: 'sos-peperoni', icon: '🌶️', title: 'Sos peperoni', text: 'Sos aromat cu pepperoni — bogat în gust, cu un iz ușor afumat și condimentat.', status: 'live', image: '/products/sos-peperoni.jpg', price: '7 lei' },
      { slug: 'sos-chili', icon: '🌶️', title: 'Sos chili ușor picant', text: 'Sos chili cu o notă fină de iute — caracter și aromă, fără să ardă prea tare.', status: 'live', image: '/products/sos-chili.jpg', price: '7 lei' },
      { slug: 'sos-rosii-dulce', icon: '🍅', title: 'Sos roșii dulce', text: 'Sos de roșii catifelat și dulce — gustul blând și echilibrat care mulțumește pe toată lumea.', status: 'live', image: '/products/sos-rosii-dulce.jpg', price: '7 lei' },
      { slug: 'sos-rosii-picant', icon: '🌶️', title: 'Sos roșii picant', text: 'Sos de roșii cu un kick de ardei iute — savoarea picantă care ridică orice felie la alt nivel.', status: 'live', image: '/products/sos-rosii-picant.jpg', price: '7 lei' },
    ],
  },
  {
    category: 'Băuturi',
    blurb: 'Răcoritoare și apă, livrate odată cu pizza.',
    services: [
      { slug: 'pepsi', icon: '🥤', title: 'Pepsi 0,5L', text: 'Cola clasică Pepsi, dulce și carbogazoasă.', status: 'live', image: '/products/pepsi.jpg', price: '10 lei' },
      { slug: 'pepsi-twist', icon: '🥤', title: 'Pepsi Twist 0,5L', text: 'Pepsi cu aromă proaspătă de lămâie — răcoritor și vibrant.', status: 'live', image: '/products/pepsi-twist.jpg', price: '10 lei' },
      { slug: 'apa-tusnad', icon: '💧', title: 'Apă minerală Tușnad 0,5L', text: 'Apă minerală naturală din sursa Tușnad, cu bule fine.', status: 'live', image: '/products/apa-tusnad.jpg', price: '8 lei' },
      { slug: 'apa-carpatica', icon: '💧', title: 'Apă plată Carpatica 0,5L', text: 'Apă de izvor din Carpați — pură și răcoritoare.', status: 'live', image: '/products/apa-carpatica.jpg', price: '8 lei' },
    ],
  },
]

export const flagship = {
  title: 'Comandă online în câțiva pași',
  text: 'Alegi din meniu, plătești numerar la livrare sau cu cardul (BT iPay), iar noi îți aducem pizza caldă acasă — în Deva și împrejurimi, în maximum 60 de minute.',
}

export const services: Service[] = serviceGroups.flatMap((g) => g.services)

/* ---- Combo-uri / Meniuri ------------------------------------------------
   Pizza Deva NU are momentan meniuri combo pe site. Componenta PricingPlans
   rămâne în bibliotecă (reutilizabilă), dar NU o populăm cu date inventate. */
export interface Plan {
  name: string
  price: string
  period: string
  tagline: string
  highlight: boolean
  features: string[]
}
export const plans: Plan[] = []
export const plansNote =
  'Pizza Deva nu are momentan meniuri combo. Componenta rămâne pentru viitoare campanii.'

/* ---- Oferta săptămânii (TEMPLATE de promo — folosit de AuditLanding) ----
   Exemplu de campanie; nu e o ofertă activă confirmată. */
export const auditLanding = {
  eyebrow: 'Oferta săptămânii',
  headline: 'Marți = Pizza Zi 🍕',
  subtext:
    'Comandă 2 pizza preferate și primești o limonadă cadou. Valabil marțea, până la ora 21:00 — nu lăsa oferta să expire.',
  checklistTitle: 'Ce include oferta',
  checklist: [
    '2 pizza la alegere din meniu',
    '1 limonadă cadou',
    'Comandă rapidă online',
    'Livrată caldă, în maximum 60 de minute',
  ],
  cta: 'Comandă oferta',
}

/* ---- FAQ (food) -------------------------------------------------------- */
export const faqs = [
  { q: 'Cât durează livrarea?', a: 'În condiții normale, maximum 60 de minute în Deva. La vârf de comenzi sau vreme rea, până la 120 de minute.' },
  { q: 'Cât costă livrarea?', a: 'Costul se calculează automat la finalizare, în funcție de adresă. Pentru anumite zone sau comenzi peste o sumă-prag, livrarea poate fi gratuită.' },
  { q: 'Cum comand?', a: 'Direct pe pizza-deva.ro sau telefonic la 0723 861 994. Poți alege livrare sau ridicare personală.' },
  { q: 'Ce program aveți?', a: 'Luni–Sâmbătă, 10:00–21:00 (ultima comandă 20:30). Duminică închis.' },
  { q: 'Cum pot plăti?', a: 'Numerar la livrare/ridicare sau cu cardul online prin BT iPay.' },
  { q: 'De unde sunt ingredientele?', a: 'Preparăm manual în fiecare zi, cu ingrediente proaspete.' },
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
    'Comandă rapidă online, livrată caldă în maximum 60 de minute',
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
    { label: 'Sosuri', href: '/#meniu' },
    { label: 'Băuturi', href: '/#meniu' },
  ],
  legal: [
    { label: 'Comandă online', href: '/comenzi' },
    { label: 'Comandă, Livrare și Retur', href: '/comanda-livrare-retur' },
    { label: 'Termeni și condiții', href: '/termeni-si-conditii' },
    { label: 'Politica de confidențialitate', href: '/politica-de-confidentialitate' },
  ],
}
