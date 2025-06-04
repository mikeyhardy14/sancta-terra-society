export default function Contact() {
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
            <h1 className="medieval-title">Contact Us</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">Correspondence</h2>
              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">General Inquiries</h3>
                <p className="medieval-text">
                  For general questions about the Society, our mission, or how to get involved:
                </p>
                <p className="text-amber-800 font-bold">info@sanctaterrasociety.org</p>
              </div>

              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Shrine Projects</h3>
                <p className="medieval-text">
                  For inquiries about building or maintaining shrines in your area:
                </p>
                <p className="text-amber-800 font-bold">projects@sanctaterrasociety.org</p>
              </div>

              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Spiritual Guidance</h3>
                <p className="medieval-text">
                  For spiritual direction and guidance regarding our mission:
                </p>
                <p className="text-amber-800 font-bold">chaplain@sanctaterrasociety.org</p>
              </div>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">Regional Offices</h2>
              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">North America</h3>
                <p className="medieval-text">
                  Serving the United States, Canada, and Mexico
                </p>
                <p className="text-amber-800 font-bold">northamerica@sanctaterrasociety.org</p>
              </div>

              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Europe</h3>
                <p className="medieval-text">
                  Serving European nations and the British Isles
                </p>
                <p className="text-amber-800 font-bold">europe@sanctaterrasociety.org</p>
              </div>

              <div className="medieval-contact-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Other Regions</h3>
                <p className="medieval-text">
                  For all other regions worldwide
                </p>
                <p className="text-amber-800 font-bold">international@sanctaterrasociety.org</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="medieval-notice">
              <h2 className="medieval-subtitle mb-4">Join Our Mission</h2>
              <p className="medieval-text">
                We welcome all faithful Catholics who feel called to participate in this sacred work. 
                Whether you are skilled in construction, have access to public spaces, or simply wish 
                to support our efforts through prayer and donation, there is a place for you in our Society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 