import React from 'react';
import { Search, Bell, User, Menu, Download } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const location = useLocation();

  return (
    <nav className="h-16 bg-jaco-dark border-b border-white/5 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left Section: Logo & Mobile Toggle */}
      <div className="flex items-center gap-4 lg:gap-8">
        <button onClick={toggleSidebar} className="text-white hover:bg-white/10 p-2 rounded-lg lg:hidden">
          <Menu size={20} />
        </button>
        
        <Link to="/" className="flex items-center gap-2">
           {/* Abstract Logo Representation */}
           <div className="w-8 h-8 bg-gradient-to-br from-jaco-primary to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-jaco-primary/30">
             <span className="text-white font-bold text-lg">J</span>
           </div>
           <span className="text-xl font-bold tracking-tight hidden sm:block">
             Jaco<span className="text-jaco-primary">.live</span>
           </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 ml-4">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-jaco-primary ${
                location.pathname === link.path ? 'text-jaco-primary' : 'text-jaco-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Middle Section: Search */}
      <div className="hidden md:flex flex-1 max-w-xl px-8">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-jaco-muted group-focus-within:text-jaco-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search creators, streams, or categories..." 
            className="w-full bg-jaco-card text-white text-sm rounded-lg py-2.5 pl-10 pr-4 border border-transparent focus:border-jaco-primary/50 focus:bg-black focus:outline-none transition-all placeholder:text-jaco-muted/60"
          />
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="hidden xl:flex gap-2">
            <Download size={16} />
            <span className="hidden xl:inline">App</span>
        </Button>
        
        <button className="text-jaco-muted hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-jaco-dark"></span>
        </button>

        <div className="h-6 w-px bg-white/10 mx-1 hidden sm:block"></div>

        <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
                Log In
            </Button>
            <Button variant="primary" size="sm">
                Sign Up
            </Button>
        </div>

        <button className="sm:hidden text-white p-1">
             <User size={24} />
        </button>
      </div>
    </nav>
  );
};