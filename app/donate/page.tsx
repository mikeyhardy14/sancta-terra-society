import { getDonatePage } from '../../sanity/lib/utils';

interface DonationOption {
  textAbove?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  openInNewTab: boolean;
  textBelow?: string;
}

interface DonatePageData {
  pageTitle?: string;
  donationOptions?: DonationOption[];
  taxInformation?: {
    title?: string;
    description?: string;
    taxId?: string;
    bibleQuote?: {
      text?: string;
      reference?: string;
    };
  };
}

export default async function Donate() {
  const donateData: DonatePageData = await getDonatePage();

  // Fallback data in case Sanity data isn't available yet
  const fallbackData: DonatePageData = {
    pageTitle: "Support Our Mission",
    donationOptions: [
      {
        textAbove: "Support our sacred mission through your generous contributions.",
        title: "General Support",
        description: "Your general donations help fund our overall mission of building and maintaining public shrines. These funds support materials, craftsmen, and ongoing maintenance.",
        buttonText: "Donate Now",
        buttonUrl: "https://www.paypal.com/donate/?hosted_button_id=VU7MMBHVH47TA",
        openInNewTab: true,
        textBelow: "Every donation, no matter the size, helps advance our sacred work."
      },
      {
        textAbove: "Honor a loved one or give thanks through shrine sponsorship.",
        title: "Sponsor a Shrine",
        description: "Sponsor the construction of a complete shrine in honor of a loved one or in thanksgiving for God's blessings in your life.",
        buttonText: "Learn More",
        buttonUrl: "/projects",
        openInNewTab: true,
        textBelow: "Contact us to discuss sponsorship opportunities and dedication options."
      }
    ],
    taxInformation: {
      title: "Tax Information",
      description: "The Sancta Terra Society is a recognized 501(c)(3) charitable organization. All donations are tax-deductible to the fullest extent allowed by law.",
      taxId: "[To be provided]",
      bibleQuote: {
        text: "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.",
        reference: "Luke 6:38"
      }
    }
  };

  const data = donateData || fallbackData;

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
            <h1 className="medieval-title">{data.pageTitle || "Support Our Mission"}</h1>
          </div>
          
          {/* Full-width line matching card container */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="w-full h-0.5 mt-4" style={{backgroundColor: 'var(--medieval-gold)'}}></div>
          </div>

          {/* Single column donation layout */}
          {data.donationOptions && data.donationOptions.length > 0 && (
            <div className="max-w-2xl mx-auto">
              {data.donationOptions.map((option, index) => (
                <div key={index} className="mb-12">
                  {/* Text above card */}
                  {option.textAbove && (
                    <p className="medieval-text text-center mb-4 text-lg">
                      {option.textAbove}
                    </p>
                  )}
                  
                  {/* Enclosed donation card */}
                  <div className="p-6 rounded-lg border-2 mb-4 text-center" style={{borderColor: 'var(--earthy-green)', backgroundColor: 'var(--medieval-parchment)'}}>
                    <h2 className="medieval-subtitle mb-4" style={{color: 'var(--earthy-green)'}}>{option.title}</h2>
                    <p className="medieval-text mb-6">
                      {option.description}
                    </p>
                    <div className="medieval-button-container">
                      <a 
                        href={option.buttonUrl}
                        target={option.openInNewTab ? "_blank" : "_self"}
                        rel={option.openInNewTab ? "noopener noreferrer" : undefined}
                        className="medieval-button"
                      >
                        {option.buttonText}
                      </a>
                    </div>
                  </div>
                  
                  {/* Text below card */}
                  {option.textBelow && (
                    <p className="medieval-text text-center text-lg">
                      {option.textBelow}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {data.taxInformation && (
            <div className="text-center mt-12">
              <div className="medieval-notice">
                {data.taxInformation.title && (
                  <h2 className="medieval-subtitle mb-4">{data.taxInformation.title}</h2>
                )}
                {data.taxInformation.description && (
                  <p className="medieval-text">
                    {data.taxInformation.description}
                    {data.taxInformation.taxId && (
                      <> Tax ID: {data.taxInformation.taxId}</>
                    )}
                  </p>
                )}
                {data.taxInformation.bibleQuote?.text && data.taxInformation.bibleQuote?.reference && (
                  <p className="medieval-text italic mt-4">
                    "{data.taxInformation.bibleQuote.text}" - {data.taxInformation.bibleQuote.reference}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 