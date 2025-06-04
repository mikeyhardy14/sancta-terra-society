export default function Donate() {
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
            <h1 className="medieval-title">Support Our Mission</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">Ways to Give</h2>
              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">General Support</h3>
                <p className="medieval-text">
                  Your general donations help fund our overall mission of building and maintaining 
                  public shrines. These funds support materials, craftsmen, and ongoing maintenance.
                </p>
                <div className="medieval-button-container">
                  <button className="medieval-button">Donate Now</button>
                </div>
              </div>

              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Sponsor a Shrine</h3>
                <p className="medieval-text">
                  Sponsor the construction of a complete shrine in honor of a loved one or 
                  in thanksgiving for God's blessings in your life.
                </p>
                <div className="medieval-button-container">
                  <button className="medieval-button">Learn More</button>
                </div>
              </div>

              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Memorial Gifts</h3>
                <p className="medieval-text">
                  Honor the memory of deceased loved ones by contributing to the creation 
                  of sacred spaces that will inspire prayer for generations.
                </p>
                <div className="medieval-button-container">
                  <button className="medieval-button">Memorial Form</button>
                </div>
              </div>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">Other Ways to Help</h2>
              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Monthly Giving</h3>
                <p className="medieval-text">
                  Join our community of monthly supporters who provide steady funding 
                  for our ongoing work. Even small monthly gifts make a big difference.
                </p>
                <ul className="medieval-giving-levels">
                  <li>$10/month - Supporter</li>
                  <li>$25/month - Guardian</li>
                  <li>$50/month - Benefactor</li>
                  <li>$100/month - Patron</li>
                </ul>
              </div>

              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">In-Kind Donations</h3>
                <p className="medieval-text">
                  We also welcome donations of materials, professional services, 
                  and skilled labor from craftsmen and artisans.
                </p>
                <p className="medieval-text">
                  <strong>Current Needs:</strong> Stone, bronze, skilled stonemasons, 
                  liturgical art, and landscaping services.
                </p>
              </div>

              <div className="medieval-donation-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Legacy Giving</h3>
                <p className="medieval-text">
                  Consider including the Sancta Terra Society in your will or estate planning 
                  to ensure our mission continues for future generations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="medieval-notice">
              <h2 className="medieval-subtitle mb-4">Tax Information</h2>
              <p className="medieval-text">
                The Sancta Terra Society is a recognized 501(c)(3) charitable organization. 
                All donations are tax-deductible to the fullest extent allowed by law. 
                Tax ID: [To be provided]
              </p>
              <p className="medieval-text italic mt-4">
                "Give, and it will be given to you. A good measure, pressed down, shaken together 
                and running over, will be poured into your lap." - Luke 6:38
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 