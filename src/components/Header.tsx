import { Button } from './Button'

export function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="/logo/logo-color.png" alt="Pizza Deva" />
      <nav className="header__nav">
        <a href="#meniu">Meniu</a>
        <a href="#combo">Combo-uri</a>
        <a href="#despre">Despre</a>
        <a href="/contact">Contact</a>
        <Button href="/comanda">Comandă acum</Button>
      </nav>
    </header>
  )
}
