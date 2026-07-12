import { emailTemplate as E } from '../data/content'
import { SectionHeading } from './SectionHeading'

/**
 * Pizza Deva — Șablon EMAIL MARKETING (mockup de brand).
 * Cum arată un email de marketing/promo trimis de Pizza Deva.
 * În producție se traduce în HTML table-based (inline styles) pentru platforma de email.
 * Logo: header pe fundal deschis => logo-color; footer dark => white.
 */
export function EmailTemplate({ logoColor = '/logo/logo-color.png', logoWhite = '/logo/logo-white.png' }: { logoColor?: string; logoWhite?: string }) {
  return (
    <section className="section section--alt">
      <div className="container container--narrow">
        <SectionHeading eyebrow="Email marketing" title="Șablon email de brand" subtitle="Cum arată un email promo trimis de Pizza Deva. În producție → HTML table-based pentru platforma de email." />

        {/* Meta email (subject + preheader) */}
        <div className="email-meta">
          <div><span>Subiect:</span> {E.subject}</div>
          <div><span>Preheader:</span> {E.preheader}</div>
        </div>

        {/* Corp email */}
        <div className="email">
          <div className="email__header">
            <img src={logoColor} alt="Pizza Deva" style={{ height: 40 }} />
          </div>

          <div className="email__hero">
            <span className="email__eyebrow">{E.eyebrow}</span>
            <h2 className="email__headline">{E.headline}</h2>
          </div>

          <div className="email__body">
            <p>{E.greeting}</p>
            {E.body.map((p) => <p key={p}>{p}</p>)}
            <ul className="email__bullets">
              {E.bullets.map((b) => <li key={b}><span aria-hidden>✓</span>{b}</li>)}
            </ul>
            <p>{E.closing}</p>
            <div className="email__cta-wrap">
              <a className="btn btn--primary" href="#">{E.cta}</a>
            </div>
            <p className="email__sig">{E.signature}</p>
          </div>

          <div className="email__footer">
            <img src={logoWhite} alt="Pizza Deva" style={{ height: 30, marginBottom: 10 }} />
            <p>{E.footerAddress}</p>
            <p className="email__unsub">{E.unsubscribe} · <a href="#">Dezabonare</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
