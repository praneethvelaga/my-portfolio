import React from 'react';
import { IconCloudDemo } from '../IconCloud/IconCloud'; 

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-500' },
        { name: 'SpringBoot', level: 85, color: 'bg-yellow-500' },
        { name: 'Python', level: 80, color: 'bg-indigo-500' },
        { name: 'MongoDB', level: 75, color: 'bg-green-600' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-400' },
        { name: 'AWS', level: 70, color: 'bg-orange-400' },
        { name: 'Linux', level: 80, color: 'bg-gray-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 rounded-xl shadow-2xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Icon Cloud Section */}
        <div className="mt-10">
          <IconCloudDemo />
        </div>
        
      </div>
    </section>
  );
};

export default Skills;