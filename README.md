# Pizza Deva — Design System

Sistem de design (tokeni + componente React) pentru **Pizza Deva**, pizzerie din Deva cu livrare la domiciliu. Servește ca **sursă de brand pentru Claude Design** (claude.ai/design) și ca brandline reutilizabil.

## Cum e folosit de Claude Design

Claude Design citește:
- `src/styles/tokens.css` — sursa unică de adevăr: culori (roșu #b30909 + charcoal + cream), fonturi (Poppins + Inter), spacing, radii
- `src/components/*` — componente React reale
- `src/data/content.ts` — conținut REAL Pizza Deva (meniu, oferte, email) — fără lorem ipsum
- `public/logo/*` — logo-urile reale (color + white)
- `src/App.tsx` — showcase care compune totul

### Componente
Core: `Button`, `Badge`, `Card`, `SectionHeading`.
Pagini/marketing: `Header`, `Hero`, `Footer`, `ServiceCard`, `ServicesOverview` (meniu grupat pe categorii), `PricingPlans` (combo-uri — momentan GOL, fără date inventate), `AuditLanding` (oferta activă reală), `FAQ`, `Testimonials`, `EmailTemplate` (email promo de brand).

## Reguli de brand

### LOCKED — nu modifica
- **Logo:** `public/logo/logo-color.png` (fundal deschis) + `logo-white.png` (fundal închis). Nu distorsiona, nu recolora.
- **Roșu de brand:** `#b30909` (din `tokens.css`).
- **Nume:** „Pizza Deva".

### FLEXIBLE
- Layout, tipografie (Poppins + Inter), imagini de produs.

## Ton & poziționare
Casual, cald, local — „ca un prieten din Deva". Apetisant, autentic. Diferențiator: **preparată manual în fiecare zi, ingrediente proaspete, livrare în maximum 60 de minute**.

⚠️ **Livrarea NU e gratuită necondiționat** — costul se calculează la finalizare după adresă; gratuită doar pentru anumite zone / peste un prag. Orice text „livrare gratuită în Deva" e GREȘIT — nu-l genera.

## Note
- 🍕 **Combo-uri**: Pizza Deva NU are meniuri combo — `plans` e gol intenționat. Nu inventa pachete/prețuri.
- 🎁 **Oferte reale** (confirmate 14 iul 2026): o doză de Pepsi GRATUIT la fiecare pizza (deschidere) + −5% permanent cu cont pe pizza-deva.ro. Astea sunt în `auditLanding`/`emailTemplate`. NU inventa alte oferte/reduceri.
- 🗣️ **Testimonials** = PLACEHOLDER. Pizza Deva are recenzii reale pe Google/Facebook — completează cu recenzii reale (cu acord) înainte de publicare; nu folosi text inventat.
- 📧 **EmailTemplate** e mockup de brand; în producție → HTML table-based pentru platforma de email.

## Mobile-first — regulă de sistem (OBLIGATORIE)

Stilurile de **bază** din `app.css` sunt cele de **telefon**. Tot ce e mai mare se adaugă prin `@media (min-width: …)`. **Nu introduce `max-width`** — ar inversa direcția sistemului.

Trei praguri, atât: **640px** · **900px** · **1200px**.

| Regulă | Valoare |
|---|---|
| Zonă minimă de atins (înălțime **și** lățime) | `--tap-min: 44px` — orice link, buton, control |
| Font minim în inputuri | `1rem` — sub 16px, Safari pe iOS dă zoom la focus |
| Padding lateral | `1rem` pe mobil → `1.5rem` de la 640px |
| Grile | o coloană pe mobil, se lățesc progresiv |
| Header | bară de 60px + meniu desfășurabil; un rând de la 900px |
| Lățimi minime în px pe conținut | **interzise** — garantează depășirea pe ecran mic |
| `prefers-reduced-motion` | respectat (inclusiv `.card:hover`) |

**Verificare, obligatorie înainte de push** (portul e cel raportat de `vite preview` — verifică TITLUL paginii, nu presupune că 4173 e liber):

```bash
node C:/MasterC-data/wat/tools/responsive-audit.js --url http://localhost:<port>/ --open-selector ".header__toggle"
```

Exit 0 = trece. Exit 1 = cel puțin un prag cade, cu lista exactă a defectelor.

> **De ce e scris aici:** repo-ul a fost clonat pe 14 iul 2026 din template-ul Safebiz,
> ÎNAINTE ca template-ul să devină mobile-first (31 iul, `b387da7`). A moștenit
> `@media (max-width: 720px) { .header__nav { display: none } }` — pe telefon site-ul
> rămânea **fără navigație**. Portat la 11 aug 2026; acum trece auditul la
> 320 / 375 / 768 / 900 / 1024 / 1440.

## Rulare locală
```bash
npm install
npm run dev
```
Stack: Vite + React + TypeScript. Stiluri prin CSS custom properties.
