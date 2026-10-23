import { packages } from '../data/packagesData.js'
import { useModal } from '../context/ModalContext.jsx'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

export default function BirthdayPackages() {
  const { openBirthdayModal } = useModal()

  return (
    <section className="birthday-section" id="birthday">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">🎉 Event Setup Designs</div>
          <h2 className="section-title">Birthday Celebration Packages</h2>
          <p className="section-subtitle">
            Focusing entirely on exquisite decoration, table arrangements, and theme setup designs.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className="package-card" key={pkg.name}>
              <div className="package-card-header">
                <img src={pkg.image} alt={pkg.alt} />
                <span className="package-tag">{pkg.tag}</span>
              </div>
              <div className="package-card-body">
                <h3 className="package-name">{pkg.name}</h3>
                <ul className="package-features-list">
                  {pkg.features.map((feature) => (
                    <li className="package-feature-item" key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="package-card-footer">
                  <button
                    className="btn btn-pista book-package-btn"
                    onClick={() => openBirthdayModal(pkg.name)}
                  >
                    {pkg.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
