export default function Leadership() {
  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          <div className="text-center mb-12">
            <div className="medieval-crest mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4 border-amber-600">
                <span className="text-amber-100 text-lg sm:text-2xl">✠</span>
              </div>
            </div>
            <h1 className="medieval-title">Leadership & Governance</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">Spiritual Direction</h2>
              <div className="medieval-leader-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Chaplain</h3>
                <p className="medieval-text">
                  Our chaplain provides spiritual guidance and ensures all activities align with Catholic teaching and tradition.
                </p>
              </div>

              <div className="medieval-leader-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Prior General</h3>
                <p className="medieval-text">
                  The Prior General oversees the overall direction of the Society and coordinates our various initiatives across regions.
                </p>
              </div>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">Regional Governance</h2>
              <div className="medieval-leader-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Regional Priors</h3>
                <p className="medieval-text">
                  Each region is led by a Prior who coordinates local shrine-building efforts and maintains relationships with diocesan authorities.
                </p>
              </div>

              <div className="medieval-leader-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Master Builders</h3>
                <p className="medieval-text">
                  Experienced craftsmen and architects who guide the design and construction of our sacred spaces.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="medieval-notice">
              <p className="medieval-text italic">
                "For where two or three are gathered in my name, there am I among them." - Matthew 18:20
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 