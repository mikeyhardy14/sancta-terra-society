'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

      {/* Floating Hamburger Button - Mobile only */}
      <div className="medieval-floating-hamburger">
        <button 
          className={`medieval-hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div className={`medieval-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="medieval-mobile-menu-header">
          <Link href="/" className="medieval-mobile-menu-brand" onClick={closeMobileMenu}>
            <div className="h-10 w-auto">
              <Image
                src="/SST_Crest_SST_Small_Lockup.png"
                alt="Sancta Terra Society"
                width={150}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>
          
          <button 
            className="medieval-close-button"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
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
          <Link href="/donate" className="medieval-mobile-menu-link" onClick={closeMobileMenu}>
            Donate
          </Link>
        </div>
      </div>
    </>
  );
} 