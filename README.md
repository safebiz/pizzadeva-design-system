# Pizza Deva — Design System

Sistem de design (tokeni + componente React) pentru **Pizza Deva**, pizzerie din Deva cu livrare gratuită. Servește ca **sursă de brand pentru Claude Design** (claude.ai/design) și ca brandline reutilizabil.

## Cum e folosit de Claude Design

Claude Design citește:
- `src/styles/tokens.css` — sursa unică de adevăr: culori (roșu #b30909 + charcoal + cream), fonturi (Poppins + Inter), spacing, radii
- `src/components/*` — componente React reale
- `src/data/content.ts` — conținut REAL Pizza Deva (meniu, combo-uri, oferte, email) — fără lorem ipsum
- `public/logo/*` — logo-urile reale (color + white)
- `src/App.tsx` — showcase care compune totul

### Componente
Core: `Button`, `Badge`, `Card`, `SectionHeading`.
Pagini/marketing: `Header`, `Hero`, `Footer`, `ServiceCard`, `ServicesOverview` (meniu grupat pe categorii), `PricingPlans` (combo-uri Solo/Familie/Party), `AuditLanding` (oferta săptămânii), `FAQ`, `Testimonials`, `EmailTemplate` (email promo de brand).

## Reguli de brand

### LOCKED — nu modifica
- **Logo:** `public/logo/logo-color.png` (fundal deschis) + `logo-white.png` (fundal închis). Nu distorsiona, nu recolora.
- **Roșu de brand:** `#b30909` (din `tokens.css`).
- **Nume:** „Pizza Deva".

### FLEXIBLE
- Layout, tipografie (Poppins + Inter), imagini de produs.

## Ton & poziționare
Casual, cald, local — „ca un prieten din Deva". Apetisant, autentic. Diferențiator: **preparată manual în fiecare zi, ingrediente proaspete, livrare gratuită în 60 de minute**.

## Note
- 🍕 **Prețurile combo** din `content.ts` sunt EXEMPLU — actualizează cu meniul real.
- 🗣️ **Testimonials** = PLACEHOLDER. Pizza Deva are recenzii reale pe Google/Facebook — completează cu recenzii reale (cu acord) înainte de publicare; nu folosi text inventat.
- 📧 **EmailTemplate** e mockup de brand; în producție → HTML table-based pentru platforma de email.

## Rulare locală
```bash
npm install
npm run dev
```
Stack: Vite + React + TypeScript. Stiluri prin CSS custom properties.
