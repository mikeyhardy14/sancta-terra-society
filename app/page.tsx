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
  const data: HomePageData | null = await getHomePage();

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
            {data?.title && <h1 className="medieval-title">{data.title}</h1>}
            {data?.title && <div className="w-32 h-1 mx-auto mb-4" style={{backgroundColor: 'var(--earthy-green)'}}></div>}
            {data?.tagline && <p className="medieval-tagline">{data.tagline}</p>}
          </div>

          {/* Main Content in Two Columns */}
          {data && (
            <div className="medieval-text-layout">
              <div className="medieval-column">
                {data.leftColumnTitle && <h2 className="medieval-subtitle">{data.leftColumnTitle}</h2>}
                {data.leftColumnIntro && (
                  <p className="medieval-text">
                    <span className="text-4xl float-left leading-none pr-2 font-bold" style={{color: 'var(--earthy-green)'}}>{data.leftColumnIntro.charAt(0)}</span>{data.leftColumnIntro.substring(1)}
                  </p>
                )}
                
                {data.leftColumnSecondParagraph && (
                  <p className="medieval-text">
                    {data.leftColumnSecondParagraph}
                  </p>
                )}

                {data.primaOpera?.title && (
                  <>
                    <h3 className="font-bold text-lg mb-3 mt-6" style={{color: 'var(--earthy-green)'}}>{data.primaOpera.title}</h3>
                    {data.primaOpera.content && (
                      <p className="medieval-text">
                        {data.primaOpera.content}
                      </p>
                    )}
                  </>
                )}

                {data.secundaOpera?.title && (
                  <>
                    <h3 className="font-bold text-lg mb-3 mt-4" style={{color: 'var(--earthy-green)'}}>{data.secundaOpera.title}</h3>
                    {data.secundaOpera.content && (
                      <p className="medieval-text">
                        {data.secundaOpera.content}
                      </p>
                    )}
                  </>
                )}
              </div>

              <div className="medieval-column">
                {data.rightColumnTitle && <h2 className="medieval-subtitle">{data.rightColumnTitle}</h2>}
                {data.rightColumnIntro && (
                  <p className="medieval-text">
                    <span className="text-4xl float-left leading-none pr-2 font-bold" style={{color: 'var(--earthy-green)'}}>{data.rightColumnIntro.charAt(0)}</span>{data.rightColumnIntro.substring(1)}
                  </p>
                )}

                {data.tertiaOpera?.title && (
                  <>
                    <h3 className="font-bold text-lg mb-3 mt-6" style={{color: 'var(--earthy-green)'}}>{data.tertiaOpera.title}</h3>
                    {data.tertiaOpera.content && (
                      <p className="medieval-text">
                        {data.tertiaOpera.content}
                      </p>
                    )}
                  </>
                )}

                {data.quartaOpera?.title && (
                  <>
                    <h3 className="font-bold text-lg mb-3 mt-4" style={{color: 'var(--earthy-green)'}}>{data.quartaOpera.title}</h3>
                    {data.quartaOpera.content && (
                      <p className="medieval-text">
                        {data.quartaOpera.content}
                      </p>
                    )}
                  </>
                )}

                {data.vocationSection?.title && (
                  <div className="medieval-notice mt-6">
                    <h3 className="font-bold text-lg mb-3" style={{color: 'var(--earthy-green)'}}>{data.vocationSection.title}</h3>
                    {data.vocationSection.quote && data.vocationSection.quoteReference && (
                      <p className="medieval-text italic">
                        "{data.vocationSection.quote}" - {data.vocationSection.quoteReference}
                      </p>
                    )}
                    {data.vocationSection.content && (
                      <p className="medieval-text">
                        {data.vocationSection.content}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom Section */}
          {data?.joinSection && (
            <div className="text-center mt-12 pt-8 border-t-2" style={{borderColor: 'var(--earthy-green)'}}>
              {data.joinSection.title && <h2 className="medieval-subtitle mb-6">{data.joinSection.title}</h2>}
              {data.joinSection.content && (
                <p className="medieval-text text-center max-w-3xl mx-auto">
                  {data.joinSection.content}
                </p>
              )}
              
              {(data.joinSection.learnMoreButtonText || data.joinSection.contactButtonText) && (
                <div className="medieval-button-container mt-8">
                  {data.joinSection.learnMoreButtonText && (
                    <Link href="/about" className="medieval-button">
                      {data.joinSection.learnMoreButtonText}
                    </Link>
                  )}
                  {data.joinSection.contactButtonText && (
                    <Link href="/contact" className="medieval-button">
                      {data.joinSection.contactButtonText}
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
