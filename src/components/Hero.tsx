import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-16 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm <span className="text-blue-600">Sarathi Kannan B</span>
            </h1>
            <p className={`text-xl sm:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              AI & Data Science Engineer | Full Stack Developer
            </p>
            <p className={`text-lg mb-8 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              B.Tech in Artificial Intelligence and Data Science with a passion for building intelligent solutions and scalable applications. Specialized in machine learning, full stack development, and blockchain technology.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="https://github.com/sarathikannan13"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} shadow-md transition-all`}
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sarathi-kannan-b-b8b6132a5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:sarathitvm1@gmail.com"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} shadow-md transition-all`}
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            <div className={`flex flex-wrap justify-center md:justify-start gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8610069621</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>sarathitvm1@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full ${darkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'} flex items-center justify-center text-white text-6xl sm:text-8xl font-bold shadow-2xl`}>
              SK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
