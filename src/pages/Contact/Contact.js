import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'praneethvelaga1016@gmail.com',
      link: 'mailto:praneethvelaga1016@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      info: '+91 8688576653',
      link: 'tel:+91 8688576653'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      info: 'Telangana, Hyderabad',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/praneethvelaga',
      color: 'hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/velaga-praneeth-74101030b ',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://x.com/16Praneeth?t=9IuB6Ilm-jU1cdAApJjxHg&s=08',
      color: 'hover:text-blue-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-400 ${social.color} bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;