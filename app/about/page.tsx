import { getAboutPage } from '../../sanity/lib/utils';

interface AboutPageData {
  pageTitle: string;
  foundationSection: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
  };
  heritageSection: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
  };
}

export default async function About() {
  const aboutData: AboutPageData = await getAboutPage();

  // Fallback data in case Sanity data isn't available yet
  const fallbackData: AboutPageData = {
    pageTitle: "About Our Society",
    foundationSection: {
      title: "Our Foundation",
      firstParagraph: "The Sancta Terra Society was founded upon the sacred calling to sanctify the temporal order through the ancient practice of building public shrines. Our members, drawn from the Catholic laity, recognize the profound spiritual significance of creating sacred spaces in our secular world.",
      secondParagraph: "In an age where the sacred and profane have become increasingly separated, we stand as witnesses to the truth that all of creation belongs to God, and that public spaces can and should acknowledge His sovereignty."
    },
    heritageSection: {
      title: "Our Heritage",
      firstParagraph: "Drawing inspiration from the rich tradition of Catholic shrine-building that spans centuries, we look to the great saints and mystics who understood that physical places can become windows to the divine.",
      secondParagraph: "From the roadside crucifixes of medieval Europe to the grand basilicas that crown our cities, the Church has always recognized the power of sacred architecture to lift hearts and minds to God."
    }
  };

  const data = aboutData || fallbackData;

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
            <h1 className="medieval-title">{data.pageTitle}</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">{data.foundationSection.title}</h2>
              <p className="medieval-text">
                {data.foundationSection.firstParagraph}
              </p>
              
              <p className="medieval-text">
                {data.foundationSection.secondParagraph}
              </p>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">{data.heritageSection.title}</h2>
              <p className="medieval-text">
                {data.heritageSection.firstParagraph}
              </p>
              
              <p className="medieval-text">
                {data.heritageSection.secondParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 