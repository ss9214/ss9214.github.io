import { useState } from 'react';
import React from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const projects = [
    {
      id: 0,
      title: "Automated Web Application Deployment CLI",
      description: "Built a Python CLI tool for automated web app deployment featuring repository analysis, Vercel integration, AWS infrastructure provisioning via Terraform, secure cross-platform credential management, and real-time build monitoring.",
      technologies: ["Python", "Terraform", "AWS", "Kubernetes", "Vercel API", "ArgoCD"],
      link: "https://github.com/ss9214/service-deployer-and-manager"
    },
    {
      id: 1,
      title: "Cybersecurity Capstone Project",
      description: "A Project for UMass Amherst's CS564: Cyber Effects course to exploit CVE-2017-5638, a vulnerability in Apache Struts2 that lets attackers run commands on the server using a crafted Content-Type header.", 
      technologies: ["C", "Python", "TCP", "Linux", "Docker"],
      link: "https://github.com/ss9214/cs564capstone"
    },
    {
      id: 2,
      title: "Hand-motion controlled UAV Drone",
      description: "A Project for UMass Amherst's CS528 course that uses an esp32-s3 microcontroller and an mpu6050 IMU to control a UAV drone with hand-motions.", 
      technologies: ["C", "MATLAB", "EspressIDF", "Scikit-learn", "Pandas", "Numpy"],
      link: "https://github.com/ss9214/cs528-UAV_Drone"
    },
    {
      id: 3,
      title: "Sri Party Games",
      description: "A personal project to create a party game site for games that can be played by 2-10 players. Deployed full-stack application on AWS EC2, achieving 99.9% uptime through PM2 process management and zero-downtime deployments",
      technologies: ["React", "Node.js", "TypeScript", "DynamoDB", "AWS EC2", "Socket.io"],
      link: "https://github.com/ss9214/sri-party-games"
    },
    {
      id: 4,
      title: "Undergraduate CICS Course Planner",
      description: "On this website, UMass CS students can search for any CICS class, with a built in search filter, and generate potential schedules based on criteria of their choosing.",
      technologies: ["Angular", "Flask", "Typescript", "Python", "OpenAI", "BeautifulSoup", "MongoDB"],
      link: "https://github.com/ss9214/course-planner"
    },
    {
      id: 5,
      title: "Modista - The Next-Gen Fashion Marketplace",
      description: "Built a fashion marketplace in a hackathon for users to find stylists to style existing clothing and suggest outfits. Developed a Machine Learning model that can make recommendations to provide accurate potential outfits.",
      technologies: ["Flutter", "Flask", "Dart", "Python", "MongoDB", "Tensorflow", "Scikit-learn", "Pandas"],
      link: "https://github.com/ss9214/modista"
    },
    {
      id: 6,
      title: "AI Pacman",
      description: "A Project for UMass Amherst's CS383 course that explores various fundamental techniques in Artificial Intelligence, such as Searching, Heuristics, and Reinforcement Learning.",
      technologies: ["Python"],
      link: "https://github.com/ss9214/AI_Pacman_Project"
    },
    {
      id: 7,
      title: "CICS Undergraduate Research Finder",
      description: "Built this website in a team of 8 for UMass Amherst's CS320 course. This web application allows undergraduate students and professors at UMass Amherst to connect over research opportunities. Students can search for professors and labs that are offering research projects. ",
      technologies: ["Angular", "Flask", "Typescript", "Python", "BeautifulSoup", "MongoDB"],
      link: "https://github.com/ss9214/course-planner"
    },
    {
      id: 8,
      title: "Treehouse Discord Bot",
      description: "This was my first-ever coding project, and it holds a lot of memories! This is a multipurpose all-in-one discord bot with music, games, leveling and more! ",
      technologies: ["Python", "PostgreSQL", "discord.py"],
      link: "https://github.com/ss9214/TreehouseDiscordBot"
    }
  
  ];

  const socialLinks = [
    {
      name: "",
      url: "https://github.com/ss9214",
      icon: <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    },
    {
      name: "",
      url: "https://linkedin.com/in/srihari-srivatsa",
      icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
      </svg>
    },
    {
      name: "sriharisriva@gmail.com",
      url: "mailto:sriharisriva@gmail.com",
      icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    },
    {
      name: "+1 (508) 969-7100",
      url: "tel:+15089697100",
      icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>,
      display: "+1 (508) 969-7100"
    }
  ];

  const sections = [
    {
      id: "background",
      title: "My Background",
      content: "Nice to meet you! I'm Srihari Srivatsa and I am a dedicated masters student in Cybersecurity at Georgia Tech. My passion for computer science stems from my innate curiosity and thirst for knowledge. I love taking incredibly hard classes, watching YouTube videos, and learning new concepts wherever I can. I want to turn theoretical to tangible, creating a physical product customers can look to. \n\nOutside of my professional life, I am an experienced Carnatic Violinist and Saxophonist, and I perform around New England and in India. I also enjoy playing table tennis and badminton, as well as weightlifting at the gym! ",
      icon: "👋"
    },
    {
      id: "interests",
      title: "Career Interests",
      content: "I graduated from UMass Amherst in May 2025 with a B.S. in Computer Science. Right now I am preparing for early career positions in DevOps Engineering and Cybersecurity. I am currently pursuing a Masters degree in Cybersecurity at Georgia Tech, with a focus on Cloud Security and Information Security.",
      icon: "🎯"
    },
    {
      id: "skills",
      title: "Technical Skills",
      content: `{
  "languages": ["Python", "TypeScript/JavaScript", "C", "Java", "YAML", "Bash", "Dart"],
  "webDevelopment": {
                  "frontend": ["React", "Angular", "Flutter"],
                  "backend": ["Node.js", "Flask", "Springboot", "Django", "FastAPI"]
                },
  "AI/ML": ["Model Context Protocol (MCP)", "LangChain", "GeminiAI", "VertexAI", "RAG", "TensorFlow", "Scikit-learn", "Pandas"],
  "security": ["VMWare", "Wireshark", "Nmap", "Ghidra", "Metasploit"],
  "databases": ["MySQL","MongoDB", "PostgreSQL", "DynamoDB"],
  "devOps": ["GitLab CI/CD", "Docker", "Kubernetes", "AWS Suite (S3, EKS, ELB, EC2, Bedrock, ECR)", "Helm", "Terraform", "ArgoCD"],
  "tools": ["Git", "Atlassian Suite", "Linux", "Shell"]
}`,
      icon: "💻"
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "DevOps Coop",
      company: "Veracode",
      location: "Burlington, MA",
      description: ["- Architected a GitLab-integrated internal developer portal using React and Backstage.io, enabling teams to rapidly discover projects, resources, and documentation, reducing documentation lookup time by 75%.",
                    "- Standardized and automated new service configuration using CI/CD pipelines and Python/Javascript scripting, reducing onboarding time for new services by 90%.",
                    "- Prototyped an internal chatbot using AWS Bedrock and ClaudeAI that leveraged a knowledge base of 50+ DevOps standards, templates, and documentation to help engineering teams accurately adopt best practices faster.",
                    "- Deployed and scaled RenovateBot across 50+ repositories, automating dependency updates and reducing manual maintenance overhead by 85%."]
    },
    {
      id: 2,
      title: "AI Engineering Intern",
      company: "Radical AI",
      location: "Remote",
      description: ["- Developed an LLM-based quiz generation tool using Python, LangChain, GeminiAI, and GCP, enabling 200+ educators to generate high-quality quizzes from structured or unstructured files in 5 minutes vs. 1+ hours for manual creation.",
                    "- Leveraged prompt engineering and retrieval-augmented generation (RAG) to extract contextually relevant data from embedded documents to create randomized quiz questions."]
    },
    {
      id: 3,
      title: "ML Security Research Volunteer",
      company: "UMass Amherst",
      location: "Amherst, MA",
      description: ["- Researched adversarial robustness of CNN architectures (VGG, ResNet) using TensorFlow, exploring potential vulnerabilities in ML-based classification systems.",
                    "- Presented work at the Undergraduate Research Night, earning the Best Undergraduate Research Volunteer Award for my work."]
    },
    {
      id: 4,
      title: "Assistant Instructor",
      company: "Kumon North America",
      location: "Framingham, MA",
      description: ["- Working with students aged 3-18 to develop their skills and abilities in math and english.",
                    "- Taught subjects ranging from tracing letters to advanced thematic analysis and counting numbers to calculus and linear algebra.",
                    "- Developed strong communication and interpersonal skills by working with a diverse group of students, parents, and staff."]
    }
  ];

  const openModal = (section) => {
    setSelectedSection(section);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSection(null);
    document.body.style.overflow = 'unset';
  };

  const openResume = () => {
    setIsResumeOpen(true);
  };

  const closeResume = () => {
    setIsResumeOpen(false);
  };

  const formatJsonContent = (content) => {
    if (selectedSection.id === 'skills') {
      try {
        // Parse JSON
        const jsonObj = JSON.parse(content);
        
        // Custom stringify function to keep arrays on one line
        const prettyJson = JSON.stringify(jsonObj, null, 2)
          .replace(/\[\n\s+/g, '[')  // Remove newline after opening bracket
          // eslint-disable-next-line
          .replace(/\n\s+\]/g, ']')   // Remove newline before closing bracket
          .replace(/",\n\s+"/g, '", "');  // Keep array items on same line
        
        const coloredJson = prettyJson
          .replace(/"([^"]+)":/g, '<span style="color: #9cdcfe">"$1"</span>:')
          .replace(/: "([^"]+)"/g, ': <span style="color: #ce9178">"$1"</span>')
          // eslint-disable-next-line
          .replace(/[{}\[\]]/g, '<span style="color: #d4d4d4">$&</span>')
          .replace(/,\n/g, '<span style="color: #d4d4d4">,</span>\n');

        return (
          <pre style={{ 
            color: '#d4d4d4',
            background: '#1e1e1e',
            padding: '1.5rem',
            borderRadius: '10px',
            fontFamily: 'Consolas, Monaco, monospace'
          }} 
          dangerouslySetInnerHTML={{ __html: coloredJson }} 
          />
        );
      } catch (e) {
        return <p>{content}</p>;
      }
    } else {
      // Style for About Me and Career Interests sections
      return (
        <pre style={{ 
          color: '#d4d4d4',
          background: '#1e1e1e',
          padding: '1.5rem',
          borderRadius: '10px',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.6'
        }}>
          {content}
        </pre>
      );
    }
  };

  return (
    <div className="App">

      <header className="main-header">
        <nav className="main-header-nav">
          <div className="header-group header-group-left">
            {socialLinks.slice(0, 2).map((social, idx) => (
              <a
                key={social.name + idx}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="header-social-link"
                title={social.name}
              >
                <span className="header-social-icon">{social.icon}</span>
                {social.name && <span className="header-social-label">{social.name}</span>}
              </a>
            ))}
          </div>
          <div className="header-group header-group-right">
            {socialLinks.slice(2).map((social, idx) => (
              <a
                key={social.name + idx}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="header-social-link"
                title={social.name}
              >
                <span className="header-social-icon">{social.icon}</span>
                {social.name && <span className="header-social-label">{social.name}</span>}
              </a>
            ))}
          </div>
        </nav>
      </header>
      
        <div className="profile-container">
          <h1 style={{paddingBottom: '15%'}}>Hey, I'm Srihari</h1>
          <img 
            src="pfp.png" 
            alt="Srihari Srivatsa" 
            className="profile-image"
          />
          <h2 className="profile-caption">
            <TypeAnimation
              sequence={[
                'Ex-DevOps Intern @ Veracode',
                1500, // wait 1.5s
                'Aspiring Cloud Engineer',
                1500,
                'Current M.S. Information Security major at Georgia Tech',
                1500,
                'B.S. Computer Science at UMass Amherst',
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h2>
        </div>
      {/* New Buttons Section */}
      <section className="button-section">
        <div className="button-container">
          <a href="#about" className="big-button">About Me</a>
          <a href="#resume" className="big-button" onClick={openResume}>Resume</a>
          <a href="#experience" className="big-button">Experience</a>
          <a href="#projects" className="big-button">Projects</a>
        </div>
      </section>
      <div id="about">
        <h2 className="section-title">About Me</h2>
        <section className="info-sections" >
        
          {sections.map(section => (
            <div 
              key={section.id} 
              className="info-bubble"
              onClick={() => openModal(section)}
            >
              <div className="bubble-icon">{section.icon}</div>
              <h2>{section.title}</h2>
              <p className="click-hint">Click to learn more</p>
            </div>
          ))}
        </section>
      </div>
      

      {selectedSection && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="modal-header">
              <span className="modal-icon">{selectedSection.icon}</span>
              <h2>{selectedSection.title}</h2>
            </div>
            <div className="modal-body">
              {formatJsonContent(selectedSection.content)}
            </div>
          </div>
        </div>
      )}

      <div id="experience">
        <h2 className="section-title">My Experience</h2>
        <main className="projects-grid">
          {experiences.map(experience => (
            <div key={experience.id} className="project-card">
              <div className="experience-image-container">
                <h2 className="project-title" style={{ 
                    fontSize: '1.5rem', 
                    color: '#FFFFFF',
                    textAlign: 'center',
                    padding: '.5rem'
                  }}>
                    <h3>{experience.title}</h3>
                    <p style={{fontSize: '1rem'}}>{experience.company}</p>
                    <p style={{fontSize: '1rem'}}>{experience.location}</p>
                  </h2>
              </div>
              <div className="project-overlay">
                  <h3>{experience.title} - {experience.company} - {experience.location}</h3>
                  {experience.description.map(desc=> (
                    <p style={{fontSize:'.7rem', margin:'0.3rem'}}>{desc}</p>
                  ))}
                  
                </div>
            </div>
          ))}
        </main>
      </div>

      <div id="projects">
        <h2 className="section-title">My Projects</h2>
        <main className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <h2 className="project-title" style={{ 
                  fontSize: '2rem', 
                  color: '#FFFFFF',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  {project.title}
                </h2>
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p style={{fontSize:'.95rem'}}>{project.description}</p>
                  <div className="tech-tags-container">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="modal-overlay" onClick={closeResume}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeResume}>×</button>
            <h2>My Resume</h2>
            <iframe 
            src="Srihari_Srivatsa_Resume.pdf" 
            width="500" height="480" title="My Resume" allow="autoplay"></iframe>
            <a href="Srihari_Srivatsa_Resume.pdf" download className="download-button">Download Resume</a>
          </div>
        </div>
      )}

      {/* Home Button */}
      <button type="button" className="home-button" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M12 3l10 9h-3v9h-6v-6h-4v6H5v-9H2l10-9z"/>
        </svg>
      </button>



    </div>
  );
}

export default App;
