import Link from 'next/link';
import Image from 'next/image';
import { getFooter } from '../../sanity/lib/utils';

interface FooterData {
  tagline: string;
  missionDescription: string;
  sacredMissionLinks: { title: string; url: string }[];
  joinWorkLinks: { title: string; url: string }[];
  contactDescription: string;
  socialMediaText: string;
  blessing: string;
  bibleQuote: string;
}

export default async function Footer() {
  const footerData: FooterData = await getFooter();

  // Fallback data if Sanity data isn't available
  const fallbackData: FooterData = {
    tagline: '"Through Beauty, to Beauty\'s God."',
    missionDescription: 'A Catholic lay organization dedicated to sanctifying the temporal order through building public shrines to Christ, Mary, the angels, and the saints.',
    sacredMissionLinks: [
      { title: 'Home', url: '/' },
      { title: 'About Our Work', url: '/about' },
      { title: 'Sacred Projects', url: '/projects' },
      { title: 'Leadership', url: '/leadership' },
    ],
    joinWorkLinks: [
      { title: 'Contact Us', url: '/contact' },
      { title: 'Support Our Mission', url: '/donate' },
      { title: 'Content Management', url: '/studio' },
    ],
    contactDescription: 'For inquiries about shrine projects, membership, or collaboration opportunities.',
    socialMediaText: 'Follow our sacred work:',
    blessing: 'Ad Majorem Dei Gloriam',
    bibleQuote: '"And the Word became flesh and dwelt among us" - John 1:14',
  };

  const data = footerData || fallbackData;
  return (
    <div className="medieval-footer-container">
      <footer className="medieval-footer">
        <div className="medieval-footer-content">
        {/* Top Section */}
        <div className="medieval-footer-top">
          {/* Logo and Mission */}
          <div className="medieval-footer-section">
            <div className="medieval-footer-logo">
              <div className="h-16 w-auto mb-4">
                <Image
                  src="/SST_Crest_SST_Small_Lockup.png"
                  alt="Sancta Terra Society"
                  width={200}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="medieval-footer-mission">
                {data.tagline}
              </p>
              <p className="medieval-footer-text">
                {data.missionDescription}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="medieval-footer-section">
            <h3 className="medieval-footer-title">Sacred Mission</h3>
            <ul className="medieval-footer-links">
              {data.sacredMissionLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="medieval-footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="medieval-footer-section">
            <h3 className="medieval-footer-title">Join Our Work</h3>
            <ul className="medieval-footer-links">
              {data.joinWorkLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="medieval-footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="medieval-footer-section">
            <h3 className="medieval-footer-title">Connect</h3>
            <div className="medieval-footer-contact">
              <p className="medieval-footer-text">
                {data.contactDescription}
              </p>
              <div className="medieval-footer-social">
                <span className="medieval-footer-text">{data.socialMediaText}</span>
                {/* Social links can be added here when available */}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="medieval-footer-divider"></div>

        {/* Bottom Section */}
        <div className="medieval-footer-bottom">
          <div className="medieval-footer-bottom-left">
            <p className="medieval-footer-copyright">
              © {new Date().getFullYear()} Sancta Terra Society. All rights reserved.
            </p>
            <p className="medieval-footer-blessing">
              <em>{data.blessing}</em>
            </p>
          </div>
          
          <div className="medieval-footer-bottom-right">
            <p className="medieval-footer-quote">
              {data.bibleQuote}
            </p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
