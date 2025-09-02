'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body class for preventing scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('medieval-menu-open');
    } else {
      document.body.classList.remove('medieval-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('medieval-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="medieval-nav">
        <div className="medieval-nav-content">
          <Link href="/" className="medieval-nav-brand">
            <div className="h-12 w-auto">
              <Image
                src="/SST_Crest_SST_Small_Lockup.png"
                alt="Sancta Terra Society"
                width={180}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>
          
          <div className="medieval-nav-links">
            <Link href="/" className="medieval-nav-link">Home</Link>
            <Link href="/about" className="medieval-nav-link">About</Link>
            <Link href="/leadership" className="medieval-nav-link">Leadership</Link>
            <Link href="/projects" className="medieval-nav-link">Projects</Link>
            <Link href="/contact" className="medieval-nav-link">Contact</Link>
            <Link href="/donate" className="medieval-nav-link">Donate</Link>
          </div>
        </div>
      </nav>

      {/* Medieval-style Mobile Navigation Bar */}
      <div className="medieval-mobile-nav">
        <Link href="/" className="medieval-mobile-logo" onClick={closeMobileMenu}>
          <Image
            src="/SST_Crest_SST_Small_Lockup.png"
            alt="Sancta Terra Society"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <button 
          className={`medieval-hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="medieval-hamburger-line"></span>
          <span className="medieval-hamburger-line"></span>
          <span className="medieval-hamburger-line"></span>
        </button>
      </div>

      {/* Medieval-style Full-screen Mobile Menu */}
      <div className={`medieval-mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="medieval-mobile-menu">
          <div className="medieval-mobile-menu-header">
            <button 
              className="medieval-close-button"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="medieval-mobile-menu-content">
            <Link href="/" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/about" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/leadership" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
              Leadership
            </Link>
            <Link href="/projects" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
              Projects
            </Link>
            <Link href="/contact" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Link href="/donate" className="medieval-mobile-menu-link medieval-mobile-menu-link-accent" onClick={closeMobileMenu}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 