import React from "react";

const About = () => {
  return (
    <section id="about" className="flex min-h-screen bg-black text-white">
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col justify-center px-12 py-16">
        {/* About Heading */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-2">ABOUT</h1>
          <div className="w-16 h-1 bg-teal-400"></div>
        </div>

        {/* Email */}
        <div className="text-gray-400 text-sm mb-8">
          praneethvelaga1016@gmail.com
        </div>

        {/* Description */}
        <div className="mb-16 max-w-2xl">
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m Velaga Sai Praneeth, a Full Stack Developer with a strong
            focus on backend development and modern web technologies. I
            specialize in creating both static websites and dynamic web
            applications that are responsive, scalable, and visually engaging.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Currently, I am working at vensyx data solutions as a Software
            Developer, where I focus on building robust backend solutions and
            integrating them with seamless frontend experiences.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy transforming ideas into functional digital experiences —
            from simple landing pages to full-featured applications. My goal is
            to deliver clean, efficient, and innovative solutions that help
            clients bring their visions to life, whether for personal projects
            or freelance opportunities.
          </p>
        </div>

        {/* Location */}
        <div className="text-gray-400 text-sm">
          <div className="mb-1">Telangana, Hyderabad</div>
          <div>India</div>
        </div>
      </div>

      {/* Right Side - Image with Overlay */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 py-8 sm:py-16 relative h-100vh">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Image */}
          <img
            src="/assets/images/mainImg.png"
            alt="Praneeth - Full Stack Developer"
            className="w-64 sm:w-80 lg:w-96 h-auto object-cover filter  contrast-110 shadow-2xl relative z-10"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full z-20"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 30%, transparent 100%)"
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
