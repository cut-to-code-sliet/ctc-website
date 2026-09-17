import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// --- Navigation Links ---
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

// --- Social Media SVG Icons ---
const GithubIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// --- Social Links Component ---
// Update the 'href' values here with your personal profile links
const Socials = () => (
  <div className="flex items-center gap-2.5">
    
    {/* 1. GitHub */}
    <a
      href="https://github.com/cut-to-code-sliet"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    >
      <GithubIcon />
    </a>
    
    {/* 2. LinkedIn */}
    <a
      href="https://www.linkedin.com/in/cut-to-code-a7993a3b9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    >
      <LinkedinIcon />
    </a>
    
    {/* 3. Instagram */}
    <a
      href="https://www.instagram.com/cut2code_sliet?stkn=cjM3ZzRhcWRrdnV3"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
    >
      <InstagramIcon />
    </a>
    
    {/* 4. X (Twitter) */}
    <a
      href="https://x.com/code_cut93622"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
    >
      <XIcon />
    </a>

  </div>
);

// --- Main Navbar Component ---
export default function Navbar({ logoSrc }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    
    tl.fromTo(navRef.current, 
      { y: -100 }, 
      { y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(logoRef.current, 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, 
      "-=0.5"
    )
    .fromTo(linksRef.current.children, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: 'power2.out' }, 
      "-=0.4"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }, 
      "-=0.2"
    );

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (label, href) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow,padding] duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-1.5' 
          : 'bg-transparent py-3 md:py-4' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          ref={logoRef}
          onClick={() => go('Home', '#home')}
          className="flex items-center"
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Logo"
              className="h-20 md:h-11 w-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="h-10 md:h-11 w-10 md:w-11 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-500 font-display text-xs font-bold">
              C2C
            </div>
          )}
        </button>

        {/* Desktop links */}
        <ul ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => go(label, href)}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  active === label ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA & Desktop Socials */}
        <div ref={ctaRef} className="hidden md:flex items-center gap-5">
          <div className="flex items-center pr-5 border-r border-slate-700">
            <Socials />
          </div>
          
          <a
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 text-white font-body text-sm font-bold tracking-wide rounded hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20"
          >
            Join Us
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-[2px] bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-300 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-900 border-t border-slate-800 px-8 py-6 flex flex-col gap-5 shadow-2xl">
          {navLinks.map(({ label, href }) => (
            <button key={label} onClick={() => go(label, href)}
              className={`text-left font-body text-base font-medium transition-colors ${
                active === label ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 px-5 py-3.5 bg-blue-600 text-white text-center font-body text-sm font-bold rounded-md shadow-md">
            Join Us
          </a>

          {/* Mobile Socials */}
          <div className="mt-4 pt-5 border-t border-slate-800 flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </nav>
  );
}