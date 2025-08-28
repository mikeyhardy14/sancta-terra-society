export default function Contact() {
  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          <div className="text-center mb-12">
            <div className="medieval-crest mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4" style={{backgroundColor: 'var(--medieval-brown)', borderColor: 'var(--earthy-green)'}}>
          <span className="text-lg sm:text-2xl" style={{color: 'var(--medieval-parchment)'}}>✠</span>
              </div>
            </div>
            <h1 className="medieval-title">Contact Us</h1>
          </div>

          {/* Single column contact layout */}
          <div className="max-w-2xl mx-auto">
            <div className="medieval-contact-card text-center mb-8">
              <h2 className="medieval-subtitle mb-6"></h2>
              <p className="medieval-text text-lg mb-6">
                For all inquiries regarding the Society, our mission, shrine projects, spiritual guidance, 
                or how to get involved, please contact us at:
              </p>
              <div className="p-6 rounded-lg border-2 mb-6" style={{borderColor: 'var(--earthy-green)', backgroundColor: 'var(--medieval-parchment)'}}>
                <p className="font-bold text-2xl" style={{color: 'var(--earthy-green)'}}>
                  sanctaterrasociety@gmail.com
                </p>
              </div>
              <p className="medieval-text">
                We welcome correspondence from faithful Catholics interested in our sacred work of 
                building and maintaining public shrines. Whether you have questions about our mission, 
                wish to start a project in your area, or seek spiritual guidance, we are here to help.
              </p>
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