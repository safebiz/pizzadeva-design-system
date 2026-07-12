import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { SectionHeading } from './components/SectionHeading'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { ServicesOverview } from './components/ServicesOverview'
import { PricingPlans } from './components/PricingPlans'
import { AuditLanding } from './components/AuditLanding'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { EmailTemplate } from './components/EmailTemplate'
import { flagship, promises, story } from './data/content'

const palette = [
  { name: 'Roșu Pizza Deva', hex: '#b30909' },
  { name: 'Roșu închis (hover)', hex: '#8a0707' },
  { name: 'Charcoal (ink)', hex: '#1c1410' },
  { name: 'Cream', hex: '#faf4e9' },
  { name: 'Auriu (accent)', hex: '#e6b455' },
  { name: 'Text muted', hex: '#6b5d54' },
]

export function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* Trust strip — promisiuni */}
      <section className="section--alt" style={{ padding: '1.25rem 0' }}>
        <div className="container promises">
          {promises.map((p) => (
            <div key={p.text} className="promise">
              <span className="promise__icon" aria-hidden>{p.icon}</span>
              <span>{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Meniu — grupat pe categorii */}
      <ServicesOverview />

      {/* Livrare gratuită (flagship) */}
      <section className="section">
        <div className="container">
          <Card style={{ textAlign: 'center', background: 'var(--gradient-hero)', border: 'none', color: '#fff' }}>
            <Badge variant="success">Fără cost de livrare</Badge>
            <h2 style={{ color: '#fff', marginTop: '1rem' }}>{flagship.title}</h2>
            <p style={{ maxWidth: 620, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.88)' }}>{flagship.text}</p>
            <Button variant="on-dark" href="/comanda">Comandă acum</Button>
          </Card>
        </div>
      </section>

      {/* Combo-uri & meniuri */}
      <PricingPlans />

      {/* Oferta săptămânii */}
      <AuditLanding />

      {/* Despre / Poveste */}
      <section id="despre" className="section section--alt">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <SectionHeading eyebrow="Despre noi" title="Pizza cu suflet din Deva" />
          <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--color-text-muted)' }}>{story}</p>
        </div>
      </section>

      {/* Testimoniale (placeholder — recenzii reale de completat) */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Șablon email marketing */}
      <EmailTemplate />

      {/* CTA final */}
      <section className="section">
        <div className="container">
          <Card style={{ textAlign: 'center', background: 'var(--color-cream)', border: 'none' }}>
            <h2>Ți-e foame? Comandă acum 🍕</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 1.5rem' }}>
              Pizza proaspătă, livrată gratuit în Deva, în 60 de minute. La un click distanță.
            </p>
            <Button href="/comanda">Comandă acum</Button>
          </Card>
        </div>
      </section>

      {/* ---- STYLE GUIDE (referință pentru Claude Design) ---- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Design System" title="Style guide" />

          <h3>Culori (LOCKED: roșu + logo)</h3>
          <div className="swatches" style={{ marginBottom: '3rem' }}>
            {palette.map((c) => (
              <div className="swatch" key={c.hex}>
                <div className="swatch__color" style={{ background: c.hex }} />
                <div className="swatch__meta">
                  <strong>{c.name}</strong>
                  <code>{c.hex}</code>
                </div>
              </div>
            ))}
          </div>

          <h3>Tipografie (Poppins + Inter)</h3>
          <div style={{ marginBottom: '3rem' }}>
            <h1>Titlu H1 — Poppins Bold</h1>
            <h2>Titlu H2 — Poppins Bold</h2>
            <h3>Titlu H3 — Poppins Semibold</h3>
            <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--color-text-muted)' }}>
              Lead / subtitlu — Inter Regular. Diacritice: ă î â ș ț.
            </p>
            <p>Body text — Inter Regular, ~18px, line-height 1.6.</p>
          </div>

          <h3>Butoane & badge-uri</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">Comandă</Button>
            <Button variant="secondary">Vezi meniul</Button>
            <Badge>Nou</Badge>
            <Badge variant="success">Ofertă</Badge>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
