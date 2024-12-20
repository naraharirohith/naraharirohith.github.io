import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Briefcase, GraduationCap, Code, User, Award, BookOpen, Building } from "lucide-react";

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
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Rohith Narahari</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Experienced Blockchain Developer with expertise in web3, cryptography, and decentralized applications
          </p>
          <div className="mt-4 text-gray-400">
            <p>rohit.narahari@gmail.com | +91 9989161305</p>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <p className="text-3xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Education Card */}
        <div className="bento-card">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Amrita Vishwa Vidyapeetham</h3>
            <p className="text-gray-400">B.Tech In Computer Science And Engineering</p>
            <p className="text-blue-400">GPA: 8.2</p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="font-semibold text-blue-400">Programming Languages</h3>
              <p className="text-gray-300">Solidity, Python, Javascript, Typescript, C, Java</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">Database Management</h3>
              <p className="text-gray-300">PostgreSQL, GraphQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">Software / Tools</h3>
              <p className="text-gray-300">Cryptography, Ethereum, Polygon, Hardhat, Foundry, Ethers, Web3js</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">Operating Systems</h3>
              <p className="text-gray-300">Linux, Windows</p>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl font-semibold">Blockchain Lead</h3>
              <p className="text-blue-400">Vivid Infotech, Chennai, India | 01/2023 – 12/2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed and maintained NFT marketplace with secure smart contracts</li>
                <li>Managed overall workflow and delivered high-quality code</li>
              </ul>
              <p className="text-gray-400 mt-2">Technologies: Solidity, Ethereum, NFTs, Blockchain, Smart Contracts, NodeJS, PostgreSQL, ReactJS</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Blockchain Developer</h3>
              <p className="text-blue-400">Arcana Networks | 08/2021 – 11/2022</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed blockchain wallet using DKG and secure dApp storage solutions</li>
                <li>Implemented interoperability solutions using Chainbridge and LayerZero</li>
              </ul>
              <p className="text-gray-400 mt-2">Technologies: Solidity, DKG, Chainbridge, LayerZero, NuCypher, Blockchain, Web3, NodeJS, TypeScript</p>
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-lg font-semibold">MicroMission</h3>
              <p className="text-gray-300">Web3 SaaS platform for microtask outsourcing with Solana-based payments</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">DStorage</h3>
              <p className="text-gray-300">Ethereum-based decentralized file storage system using IPFS</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Perpetual Protocol</h3>
              <p className="text-gray-300">Decentralized perpetual futures protocol with liquidity management</p>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bento-card">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <ul className="list-disc list-inside text-left text-gray-300 space-y-2">
            <li>Led team of 3 at Hackbout 1.0</li>
            <li>Participated in 20+ CTF events</li>
            <li>Top 20 teams in Secarmy CTF</li>
            <li>Google Cloud Platform certified</li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:rohit.narahari@gmail.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;