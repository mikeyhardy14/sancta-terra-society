'use client';

import Link from 'next/link';
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
            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <span className="text-yellow-200 text-lg font-bold">✠</span>
            </div>
            <span>Sancta Terra Society</span>
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
            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <span className="text-yellow-200 text-lg font-bold">✠</span>
            </div>
            <span>Sancta Terra Society</span>
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