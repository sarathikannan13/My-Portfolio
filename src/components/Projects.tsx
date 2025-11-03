import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Computer Vision Application',
      description: 'Developed an intelligent image processing system using OpenCV and Python for real-time object detection and recognition.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'NumPy'],
      features: [
        'Real-time object detection',
        'Image classification with 90% accuracy',
        'Custom trained model implementation',
        'Optimized for performance',
      ],
    },
    {
      title: 'Full Stack Web Application',
      description: 'Built a scalable web application with modern technologies, featuring user authentication, real-time updates, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'User authentication and authorization',
        'RESTful API design',
        'Real-time data synchronization',
        'Responsive UI/UX design',
      ],
    },
    {
      title: 'Blockchain Cryptocurrency Research',
      description: 'Published research on cryptocurrency mechanisms and blockchain technology, analyzing consensus algorithms and scalability solutions.',
      technologies: ['Blockchain', 'Cryptocurrency', 'Research', 'Analysis'],
      features: [
        'Comprehensive literature review',
        'Novel insights on consensus mechanisms',
        'Scalability analysis',
        'Presented at national conference',
      ],
    },
    {
      title: 'Machine Learning Model',
      description: 'Developed predictive models using various ML algorithms for data analysis and pattern recognition with high accuracy.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
      features: [
        'Data preprocessing and feature engineering',
        'Model training and optimization',
        'Cross-validation and testing',
        'Performance visualization',
      ],
    },
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
              onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
            >
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject === idx && (
                <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Features:
                  </h4>
                  <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                <button className={`flex items-center gap-2 px-4 py-2 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-colors`}>
                  <Github size={18} />
                  View Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  <ExternalLink size={18} />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
