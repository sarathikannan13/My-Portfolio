import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Sarathi Kannan B. All rights reserved.
          </p>
          <p className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Built with <Heart size={16} className="text-red-500" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
