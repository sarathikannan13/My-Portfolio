import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Sarathi Kannan B
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-3 py-2 rounded-md capitalize ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
