import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'; // Make sure your logo is in src/assets

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="bg-primary text-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto h-[5vh] flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
                <img src={Logo} alt="Columbia Poker Club Logo" className="h-10 w-10 rounded-full" />
            </Link>

            <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-accent transition text-2xl">Home</Link>
                <Link to="/about" className="hover:text-accent transition text-2xl">About</Link>
            </div>

            <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        {menuOpen && (
            <div className="md:hidden bg-primary text-white w-full flex flex-col items-center py-4 space-y-4">
                <Link to="/" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className="hover:text-accent transition" onClick={() => setMenuOpen(false)}>About</Link>
            </div>
        )}
    </nav>
);
}

export default Navbar;