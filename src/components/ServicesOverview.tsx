import { serviceGroups } from '../data/content'
import type { ServiceStatus } from '../data/content'
import { SectionHeading } from './SectionHeading'

const STATUS_LABEL: Record<ServiceStatus, string | null> = {
  live: null,
  ready: null,
  blocked: 'În curând',
}

/**
 * Pizza Deva — Meniul, grupat pe categorii. Fiecare produs duce la comandă.
 */
export function ServicesOverview({ onService }: { onService?: (slug: string) => void }) {
  return (
    <section id="meniu" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Meniu"
          title="Meniul nostru"
          subtitle="Pizza proaspătă, preparată manual în fiecare zi. Alege-ți preferata și noi ți-o aducem caldă la ușă."
        />
        {serviceGroups.map((group) => (
          <div key={group.category} className="svc-group">
            <div className="svc-group__head">
              <h3>{group.category}</h3>
              <p>{group.blurb}</p>
            </div>
            <div className="grid grid--3">
              {group.services.map((s) => (
                <button
                  key={s.slug}
                  className="card service-card service-card--btn"
                  onClick={() => onService?.(s.slug)}
                  type="button"
                >
                  <div className="icon" aria-hidden>{s.icon}</div>
                  <h4>
                    {s.title}
                    {STATUS_LABEL[s.status] && <span className="tag-soon">{STATUS_LABEL[s.status]}</span>}
                  </h4>
                  <p>{s.text}</p>
                  <span className="link">Comandă →</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
