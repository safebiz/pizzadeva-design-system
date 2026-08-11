import { useState } from 'react'
import { Button } from './Button'

/**
 * Header MOBILE-FIRST.
 *
 * Mobil  : bară de 60px — logo + buton „Meniu". Navigația se desfășoară
 *          dedesubt la apăsare, cu rânduri de minimum 44px.
 * Desktop: de la 900px totul pe un rând; butonul de meniu dispare, panoul
 *          e mereu vizibil (din CSS, nu din starea React).
 *
 * ⚠️ Versiunea anterioară ascundea navigația pe telefon cu
 * `@media (max-width: 720px) { .header__nav { display: none } }` și NU punea
 * nimic în loc — site-ul rămânea fără navigație pe mobil. Un meniu ascuns
 * cere întotdeauna un înlocuitor.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__bar">
        <a href="/" aria-label="Pizza Deva">
          <img className="header__logo" src="/logo/logo-color.png" alt="Pizza Deva" />
        </a>
        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="pdv-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Meniu
        </button>
      </div>

      <div className="header__panel" id="pdv-nav" data-open={open}>
        <nav className="header__nav">
          <a href="#meniu" onClick={() => setOpen(false)}>Meniu</a>
          <a href="#despre" onClick={() => setOpen(false)}>Despre</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          <Button href="/comanda">Comandă acum</Button>
        </nav>
      </div>
    </header>
  )
}
