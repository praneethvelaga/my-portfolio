import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Vensyx Data Solutions',
      location: 'Hyderabad, Telangana',
      period: '2025 - Present',
      description: 'Started as an intern and converted to a full-time Backend Developer role. Worked on multiple client projects, contributed to UI/UX designs in Figma, and gained hands-on experience with Node.js, React.js, and React Native.',
      achievements: [
        'Developed and maintained scalable backend services using Node.js',
        'Built responsive web and mobile interfaces with React.js and React Native',
        'Created Figma designs to support UI/UX improvements',
        'Contributed to 2+ successful client project deliveries'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Gollamudi Technology and Software (GTS)',
      location: 'Tenali, AP',
      period: '2025',
      description: 'Completed a 3-month internship focused on full-stack web development, working on a project for GTS using React.js, Node.js, and MySQL. Delivered a functional application and submitted it to GTS.',
      achievements: [
        'Developed a full-stack application for GTS',
        'Gained hands-on experience with React.js, Node.js, and MySQL',
        'Collaborated with team members to deliver project on time'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900 rounded-xl shadow-2xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col sm:text-right text-sm text-gray-500 space-y-1">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;