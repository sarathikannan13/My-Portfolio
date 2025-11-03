import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Education & Background
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm currently pursuing my B.Tech in Artificial Intelligence and Data Science, maintaining a strong academic record with a CGPA of 8.3. My journey in technology has been driven by a deep curiosity about how intelligent systems can solve real-world problems.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond academics, I've immersed myself in emerging technologies like blockchain and cryptocurrency, even publishing research in this field. I believe in continuous learning and staying at the forefront of technological innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-md`}>
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-blue-600" size={28} />
                <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h4>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>B.Tech in AI & Data Science</strong><br />
                CGPA: 8.3/10
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-md`}>
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-blue-600" size={28} />
                <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Research
                </h4>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Published research paper on cryptocurrency and blockchain technology
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-md`}>
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="text-blue-600" size={28} />
                <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Focus Areas
                </h4>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Machine Learning, Full Stack Development, Computer Vision, Blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
