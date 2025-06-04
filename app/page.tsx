import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          {/* Central Crest */}
          <div className="text-center mb-8">
            <div className="medieval-crest mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-amber-800 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4 border-amber-600 shadow-lg">
                <span className="text-amber-100 text-xl sm:text-2xl md:text-3xl font-bold">✠</span>
              </div>
            </div>
            <h1 className="medieval-title">SANCTA TERRA SOCIETY</h1>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="medieval-tagline">"Because he was blinded by dust, he is healed by dust."</p>
          </div>

          {/* Main Content in Two Columns */}
          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">CONSILIO DOMINI SANCTAE TERRAE</h2>
              <p className="medieval-text">
                <span className="text-4xl float-left leading-none pr-2 text-amber-800 font-bold">T</span>o practice our unique calling as members of the Catholic laity to sanctify the temporal order through the specific pietistic practice of building public shrines to Christ, Mary His mother, and the angels and saints. We shall accomplish this through four distinct activities which form the pillars of our sacred mission.
              </p>
              
              <p className="medieval-text">
                In these times when the sacred has been driven from public view, we stand as witnesses to the truth that all creation belongs to God. Our shrines serve as beacons of faith, calling all who pass by to remember their Creator and to offer a prayer in the midst of their daily labors.
              </p>

              <h3 className="text-amber-800 font-bold text-lg mb-3 mt-6">PRIMA OPERA</h3>
              <p className="medieval-text">
                <strong>Building new public shrines</strong> to Christ, Mary, the angels, and the saints. Each shrine is carefully planned to reflect the beauty of Catholic tradition while serving the spiritual needs of the local community.
              </p>

              <h3 className="text-amber-800 font-bold text-lg mb-3 mt-4">SECUNDA OPERA</h3>
              <p className="medieval-text">
                <strong>Maintaining existing public shrines.</strong> We recognize that the work of sanctification requires constant care and attention, ensuring these sacred spaces remain places of beauty and devotion.
              </p>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">QUATTUOR COLUMNAE MISSIONIS</h2>
              <p className="medieval-text">
                <span className="text-4xl float-left leading-none pr-2 text-amber-800 font-bold">O</span>ur Society operates through four principal activities, each contributing to the greater work of bringing the sacred into the public square. These endeavors represent the culmination of centuries of Catholic tradition in the building and maintenance of sacred spaces.
              </p>

              <h3 className="text-amber-800 font-bold text-lg mb-3 mt-6">TERTIA OPERA</h3>
              <p className="medieval-text">
                <strong>Providing ordinary lay Catholics with the resources</strong> to build shrines in public settings. Through our guides, workshops, and mentorship programs, we equip the faithful with the knowledge and tools necessary for this sacred work.
              </p>

              <h3 className="text-amber-800 font-bold text-lg mb-3 mt-4">QUARTA OPERA</h3>
              <p className="medieval-text">
                <strong>Organizing pilgrimages and public events</strong> based around new or existing Catholic shrines. These gatherings strengthen the bonds of community while drawing attention to the sacred presence in our midst.
              </p>

              <div className="medieval-notice mt-6">
                <h3 className="text-amber-800 font-bold text-lg mb-3">VOCATIO NOSTRA</h3>
                <p className="medieval-text italic">
                  "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." - John 1:14
                </p>
                <p className="medieval-text">
                  In building these shrines, we participate in the Incarnation itself, making visible the invisible presence of God in our world.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-12 pt-8 border-t-2 border-amber-600">
            <h2 className="medieval-subtitle mb-6">JOIN OUR SACRED MISSION</h2>
            <p className="medieval-text text-center max-w-3xl mx-auto">
              Whether you are called to the work of building, maintaining, teaching, or organizing, 
              there is a place for you in the Sancta Terra Society. Together, we shall restore 
              the sacred to its rightful place in the public square.
            </p>
            
            <div className="medieval-button-container mt-8">
              <button className="medieval-button">
                Learn More About Our Mission
              </button>
              <button className="medieval-button">
                Contact Us to Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
