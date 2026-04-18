import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/learn', label: 'Learn' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/spring-mtt', label: 'Tournament' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/10 shadow-card'
          : 'bg-gradient-to-b from-ink-900/60 to-transparent backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}>
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-secondary/40 blur-md group-hover:bg-secondary/70 transition-all duration-500" />
              <img
                src="/CU_Poker_Logo.png"
                alt="Columbia Poker Club Logo"
                className="relative h-9 w-9 rounded-full ring-1 ring-white/30"
              />
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-wide text-white/90">
              Columbia Poker
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    active
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <a
              href="https://discord.gg/4yzGm64uQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-accent to-primary hover:shadow-glow-sm transition-all duration-300"
            >
              Join Discord
            </a>
          </div>

          <button
            className="md:hidden relative w-10 h-10 text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out-expo ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-ink-900/95 backdrop-blur-xl border-t border-white/10">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://discord.gg/4yzGm64uQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-primary"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
