import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
          {/* About Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">ABOUT</h1>
            <div className="w-12 sm:w-16 h-1 bg-teal-400"></div>
          </div>

          {/* Email */}
          <div className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
            praneethvelaga1016@gmail.com
          </div>

          {/* Description */}
          <div className="mb-8 sm:mb-12 lg:mb-16 max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Hi, I'm Velaga Sai Praneeth, a Full Stack Developer with a strong
              focus on backend development and modern web technologies. I
              specialize in creating both static websites and dynamic web
              applications that are responsive, scalable, and visually engaging.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Currently, I am working at vensyx data solutions as a Software
              Developer, where I focus on building robust backend solutions and
              integrating them with seamless frontend experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I enjoy transforming ideas into functional digital experiences —
              from simple landing pages to full-featured applications. My goal is
              to deliver clean, efficient, and innovative solutions that help
              clients bring their visions to life, whether for personal projects
              or freelance opportunities.
            </p>
          </div>

          {/* Location */}
          <div className="text-gray-400 text-xs sm:text-sm">
            <div className="mb-1">Telangana, Hyderabad</div>
            <div>India</div>
          </div>
        </div>

        {/* Right Side - Image with Overlay */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12 py-8 sm:py-12 lg:py-16 relative">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
            {/* Image */}
            <img
              src="/assets/images/mainImg.png"
              alt="Praneeth - Full Stack Developer"
              className="w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-auto object-cover filter contrast-110 shadow-2xl relative z-10"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full z-20 hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 30%, transparent 100%)"
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
