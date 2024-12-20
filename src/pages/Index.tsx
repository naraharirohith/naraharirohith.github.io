import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Briefcase, GraduationCap, Code, Award, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Profile Card */}
        <div className="bento-card col-span-1 md:col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Hi, I'm <span className="text-[#7E69AB]">{portfolioData.profile.name}</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            {portfolioData.profile.description}
          </p>
          <div className="mt-4 text-sm md:text-base text-gray-400">
            <p className="break-words">{portfolioData.profile.email} | {portfolioData.profile.phone}</p>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card bg-opacity-50">
          <h2 className="text-base md:text-lg text-gray-400 mb-4">Current Time</h2>
          <p className="text-xl md:text-3xl font-bold font-mono text-[#7E69AB]">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Education Card */}
        <div className="bento-card">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-[#7E69AB]" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold">{portfolioData.education.institution}</h3>
            <p className="text-sm md:text-base text-gray-400">{portfolioData.education.degree}</p>
            <p className="text-sm md:text-base text-[#7E69AB]">GPA: {portfolioData.education.gpa}</p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bento-card col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 md:w-6 md:h-6 text-[#7E69AB]" />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-[#7E69AB] text-sm md:text-base mb-3">Programming Languages</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.programmingLanguages.split(', ').map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#7E69AB] text-sm md:text-base mb-3">Database Management</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.databaseManagement.split(', ').map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#7E69AB] text-sm md:text-base mb-3">Software / Tools</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.softwareTools.split(', ').map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#7E69AB] text-sm md:text-base mb-3">Operating Systems</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.operatingSystems.split(', ').map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-1 md:col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#7E69AB]" />
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="space-y-6 text-left">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="p-4 rounded-lg bg-opacity-50 backdrop-blur-sm bg-card-hover">
                <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm md:text-base text-[#7E69AB]">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 mt-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p className="text-xs md:text-sm text-gray-400 mt-2">Technologies: {exp.technologies}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#7E69AB]" />
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="space-y-4 text-left">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="p-4 rounded-lg bg-opacity-50 backdrop-blur-sm bg-card-hover">
                <a 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold hover:text-[#7E69AB] transition-colors"
                >
                  {project.name}
                </a>
                <p className="text-sm md:text-base text-gray-300 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bento-card">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-[#7E69AB]" />
            <h2 className="section-title">Achievements</h2>
          </div>
          <ul className="list-disc list-inside text-left text-sm md:text-base text-gray-300 space-y-2">
            {portfolioData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Contact Card */}
        <div className="bento-card col-span-1 md:col-span-3">
          <h2 className="section-title mb-6">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" 
               className="contact-icon">
              <Github className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
               className="contact-icon">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href={`mailto:${portfolioData.profile.email}`}
               className="contact-icon">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href={portfolioData.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
               className="contact-icon">
              <Twitter className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;