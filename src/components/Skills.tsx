import { Code, Database, Brain, Globe } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
      ],
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'Data Analysis', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Core Technologies',
      skills: [
        { name: 'Data Structures', level: 85 },
        { name: 'Databases', level: 80 },
        { name: 'Computer Networks', level: 75 },
        { name: 'Blockchain', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-blue-600" size={32} />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Additional Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Cryptocurrency', 'Data Structures', 'Algorithms', 'Computer Networks', 'Database Management', 'Blockchain Technology', 'API Development', 'Version Control (Git)'].map((skill, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} text-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
