'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Assessments', href: '/assessments' },
  {
    label: 'Safety Solutions',
    dropdown: [
      { label: 'Stairlifts', href: '/stairlifts' },
      { label: 'Ramps', href: '/ramps' },
      { label: 'Grips, Grab Bars & Railings', href: '/grips-grab-bars-railings' },
      { label: 'Solutions by Room', href: '/solutions-by-room' },
      { label: 'Bathroom Modifications', href: '/bathroom-modifications' },
      { label: 'Staircase Solutions', href: '/staircase-solutions' },
      { label: 'Home Access', href: '/home-access' },
      { label: 'Bedroom', href: '/bedroom' },
      { label: 'Living Room', href: '/living-room' },
    ],
  },
  {
    label: 'More Info',
    dropdown: [
      { label: 'Medical Needs', href: '/medical-needs' },
      { label: 'Meet the Owner', href: '/meet-the-owner' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDropdownActive = (items: DropdownItem[]) => {
    return items.some((item) => pathname.startsWith(item.href));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/liveinplace-logo.avif"
            alt="Live In Place"
            width={44}
            height={42}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-text-dark leading-tight">
              Live In Place
            </span>
            <span className="hidden sm:block text-[11px] text-text-light tracking-wide leading-tight">
              Making Home Safe
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isDropdownActive(item.dropdown)
                      ? 'text-primary'
                      : 'text-text-medium hover:text-primary'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-stone-100 py-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  {item.dropdown.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(child.href)
                          ? 'text-primary bg-primary-light/50 font-medium'
                          : 'text-text-medium hover:text-primary hover:bg-stone-50'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href!)
                    ? 'text-primary'
                    : 'text-text-medium hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+1-703-4330380"
            className="text-sm font-semibold text-text-dark hover:text-primary transition-colors"
          >
            (703) 433-0380
          </a>
          <Link
            href="/login"
            className="text-sm font-semibold text-text-medium hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text-dark"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 py-4 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                  }
                  className={`flex items-center justify-between w-full py-3 text-base font-medium transition-colors cursor-pointer ${
                    isDropdownActive(item.dropdown)
                      ? 'text-primary'
                      : 'text-text-dark hover:text-primary'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileDropdown === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pb-2 space-y-1">
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? 'text-primary font-medium'
                            : 'text-text-medium hover:text-primary'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`block py-3 text-base font-medium transition-colors ${
                  isActive(item.href!)
                    ? 'text-primary'
                    : 'text-text-dark hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-stone-100 space-y-3">
            <a href="tel:+1-703-4330380" className="block text-base font-semibold text-primary">
              (703) 433-0380
            </a>
            <Link
              href="/login"
              className="block w-full text-center rounded-full border-2 border-text-dark/10 px-5 py-3 text-sm font-semibold text-text-dark hover:border-primary hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
