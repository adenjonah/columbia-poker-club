import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close the menu on mobile (assumed if window width is less than 768px)
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && window.innerWidth < 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={menuRef} className="bg-primary-dark text-text-light shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto h-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 pl-4">
          <img src="/CU_Poker_Logo.png" alt="Columbia Poker Club Logo" className="h-10 w-10 rounded-full p-1" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-accent transition text-lg">Home</Link>
          <Link to="/about" className="hover:text-accent transition text-lg">About</Link>
          <Link to="/sponsors" className="hover:text-accent transition text-lg">Sponsors</Link>
          <Link to="/tournament" className="hover:text-accent transition text-lg">Tournament</Link>
        </div>

        <button 
          className="md:hidden text-text-light focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary-light text-text-dark w-full flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/sponsors" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>Sponsors</Link>
          <Link to="/tournament" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>Tournament</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;