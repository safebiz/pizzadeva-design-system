import { brand, footerLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img className="footer__logo" src="/logo/logo-white.png" alt="Pizza Deva" />
          <p className="footer__motto">{brand.motto}</p>
          <p style={{ maxWidth: 320, fontSize: '0.9rem' }}>{brand.tagline}</p>
          <p style={{ maxWidth: 320, fontSize: '0.9rem', marginTop: '1rem' }}>
            Str. Împăratul Traian 34, Deva · 0722 807 994
            <br />
            Luni–Sâmbătă 10:00–21:00
          </p>
        </div>
        <div>
          <h4>Meniu</h4>
          {footerLinks.servicii.map((l) => (
            <div key={l.label}>
              <a href={l.href}>{l.label}</a>
            </div>
          ))}
        </div>
        <div>
          <h4>Info</h4>
          {footerLinks.legal.map((l) => (
            <div key={l.href}>
              <a href={l.href}>{l.label}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">© 2026 {brand.name} · Deva</div>
    </footer>
  )
}
