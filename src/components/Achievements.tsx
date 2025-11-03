import { Award, FileText, Users, Trophy } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {
  const achievements = [
    {
      icon: FileText,
      title: 'Published Research Paper',
      description: 'Authored and published a research paper on cryptocurrency and blockchain technology, contributing to the academic community.',
      date: '2024',
      color: 'from-blue-600 to-blue-500',
    },
    {
      icon: Users,
      title: 'National Conference Speaker',
      description: 'Attended and presented at a national conference on cryptocurrency and blockchain technology, sharing insights with industry experts.',
      date: '2024',
      color: 'from-purple-600 to-purple-500',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Maintained a strong CGPA of 8.3 throughout B.Tech in Artificial Intelligence and Data Science, demonstrating consistent academic performance.',
      date: 'Ongoing',
      color: 'from-green-600 to-green-500',
    },
    {
      icon: Award,
      title: 'Technical Expertise',
      description: 'Developed proficiency in multiple programming languages and cutting-edge technologies including AI, ML, and Full Stack Development.',
      date: '2023-2024',
      color: 'from-orange-600 to-orange-500',
    },
  ];

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Achievements & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} flex-shrink-0`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {achievement.title}
                    </h3>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-2`}>
                      {achievement.date}
                    </span>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-8 rounded-lg ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'} text-center`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Continuous Learning & Growth
          </h3>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            Committed to staying at the forefront of technology through continuous learning, research, and practical application of emerging technologies in AI, Data Science, and Software Development.
          </p>
        </div>
      </div>
    </section>
  );
}
