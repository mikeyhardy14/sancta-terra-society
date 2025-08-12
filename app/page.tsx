import Image from "next/image";
import Link from "next/link";
import { getHomePage } from '../sanity/lib/utils';

interface HomePageData {
  title: string;
  tagline: string;
  leftColumnTitle: string;
  leftColumnIntro: string;
  leftColumnSecondParagraph: string;
  primaOpera: {
    title: string;
    content: string;
  };
  secundaOpera: {
    title: string;
    content: string;
  };
  rightColumnTitle: string;
  rightColumnIntro: string;
  tertiaOpera: {
    title: string;
    content: string;
  };
  quartaOpera: {
    title: string;
    content: string;
  };
  vocationSection: {
    title: string;
    quote: string;
    quoteReference: string;
    content: string;
  };
  joinSection: {
    title: string;
    content: string;
    learnMoreButtonText: string;
    contactButtonText: string;
  };
}

export default async function Home() {
  const homeData: HomePageData = await getHomePage();

  // Fallback data in case Sanity data isn't available yet
  const fallbackData: HomePageData = {
    title: "SANCTA TERRA SOCIETY",
    tagline: '"Through Beauty, to Beauty\'s God."',
    leftColumnTitle: "CONSILIO DOMINI SANCTAE TERRAE",
    leftColumnIntro: "To practice our unique calling as members of the Catholic laity to sanctify the temporal order through the specific pietistic practice of building public shrines to Christ, Mary His mother, and the angels and saints. We shall accomplish this through four distinct activities which form the pillars of our sacred mission.",
    leftColumnSecondParagraph: "In these times when the sacred has been driven from public view, we stand as witnesses to the truth that all creation belongs to God. Our shrines serve as beacons of faith, calling all who pass by to remember their Creator and to offer a prayer in the midst of their daily labors.",
    primaOpera: {
      title: "PRIMA OPERA",
      content: "Building new public shrines to Christ, Mary, the angels, and the saints. Each shrine is carefully planned to reflect the beauty of Catholic tradition while serving the spiritual needs of the local community."
    },
    secundaOpera: {
      title: "SECUNDA OPERA",
      content: "Maintaining existing public shrines. We recognize that the work of sanctification requires constant care and attention, ensuring these sacred spaces remain places of beauty and devotion."
    },
    rightColumnTitle: "QUATTUOR COLUMNAE MISSIONIS",
    rightColumnIntro: "Our Society operates through four principal activities, each contributing to the greater work of bringing the sacred into the public square. These endeavors represent the culmination of centuries of Catholic tradition in the building and maintenance of sacred spaces.",
    tertiaOpera: {
      title: "TERTIA OPERA",
      content: "Providing ordinary lay Catholics with the resources to build shrines in public settings. Through our guides, workshops, and mentorship programs, we equip the faithful with the knowledge and tools necessary for this sacred work."
    },
    quartaOpera: {
      title: "QUARTA OPERA",
      content: "Organizing pilgrimages and public events based around new or existing Catholic shrines. These gatherings strengthen the bonds of community while drawing attention to the sacred presence in our midst."
    },
    vocationSection: {
      title: "VOCATIO NOSTRA",
      quote: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
      quoteReference: "John 1:14",
      content: "In building these shrines, we participate in the Incarnation itself, making visible the invisible presence of God in our world."
    },
    joinSection: {
      title: "JOIN OUR SACRED MISSION",
      content: "Whether you are called to the work of building, maintaining, teaching, or organizing, there is a place for you in the Sancta Terra Society. Together, we shall restore the sacred to its rightful place in the public square.",
      learnMoreButtonText: "Learn More About Our Mission",
      contactButtonText: "Contact Us to Get Involved"
    }
  };

  const data = homeData || fallbackData;

  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          {/* Central Crest */}
          <div className="text-center mb-8">
            <div className="medieval-crest mb-6">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto bg-white rounded-full shadow-lg border-4" style={{borderColor: 'var(--earthy-green)'}}>
                <div className="w-full h-full p-2 sm:p-3 md:p-4">
                  <Image
                    src="/sancta-terra-logo.png"
                    alt="Sancta Terra Society Coat of Arms"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="medieval-title">{data.title}</h1>
            <div className="w-32 h-1 mx-auto mb-4" style={{backgroundColor: 'var(--earthy-green)'}}></div>
            <p className="medieval-tagline">{data.tagline}</p>
          </div>

          {/* Main Content in Two Columns */}
          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">{data.leftColumnTitle}</h2>
              <p className="medieval-text">
                <span className="text-4xl float-left leading-none pr-2 font-bold" style={{color: 'var(--earthy-green)'}}>{data.leftColumnIntro?.charAt(0) || ''}</span>{data.leftColumnIntro?.substring(1) || data.leftColumnIntro || ''}
              </p>
              
              <p className="medieval-text">
                {data.leftColumnSecondParagraph}
              </p>

              <h3 className="font-bold text-lg mb-3 mt-6" style={{color: 'var(--earthy-green)'}}>{data.primaOpera.title}</h3>
              <p className="medieval-text">
                {data.primaOpera.content}
              </p>

              <h3 className="font-bold text-lg mb-3 mt-4" style={{color: 'var(--earthy-green)'}}>{data.secundaOpera.title}</h3>
              <p className="medieval-text">
                {data.secundaOpera.content}
              </p>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">{data.rightColumnTitle}</h2>
              <p className="medieval-text">
                <span className="text-4xl float-left leading-none pr-2 font-bold" style={{color: 'var(--earthy-green)'}}>{data.rightColumnIntro?.charAt(0) || ''}</span>{data.rightColumnIntro?.substring(1) || data.rightColumnIntro || ''}
              </p>

              <h3 className="font-bold text-lg mb-3 mt-6" style={{color: 'var(--earthy-green)'}}>{data.tertiaOpera.title}</h3>
              <p className="medieval-text">
                {data.tertiaOpera.content}
              </p>

              <h3 className="font-bold text-lg mb-3 mt-4" style={{color: 'var(--earthy-green)'}}>{data.quartaOpera.title}</h3>
              <p className="medieval-text">
                {data.quartaOpera.content}
              </p>

              <div className="medieval-notice mt-6">
                <h3 className="font-bold text-lg mb-3" style={{color: 'var(--earthy-green)'}}>{data.vocationSection.title}</h3>
                <p className="medieval-text italic">
                  "{data.vocationSection.quote}" - {data.vocationSection.quoteReference}
                </p>
                <p className="medieval-text">
                  {data.vocationSection.content}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-12 pt-8 border-t-2" style={{borderColor: 'var(--earthy-green)'}}>
            <h2 className="medieval-subtitle mb-6">{data.joinSection.title}</h2>
            <p className="medieval-text text-center max-w-3xl mx-auto">
              {data.joinSection.content}
            </p>
            
            <div className="medieval-button-container mt-8">
              <Link href="/about" className="medieval-button">
                {data.joinSection.learnMoreButtonText}
              </Link>
              <Link href="/contact" className="medieval-button">
                {data.joinSection.contactButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
