import { useState } from 'react';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      technologies: ["React", "Node.js"],
      link: "https://github.com/yourproject1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      technologies: ["React", "Node.js"],
      link: "https://github.com/yourproject1"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      technologies: ["React", "Node.js"],
      link: "https://github.com/yourproject1"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      technologies: ["React", "Node.js"],
      link: "https://github.com/yourproject1"
    },
  ];

  const socialLinks = [
    {
      name: "github.com/ss9214",
      url: "https://github.com/ss9214",
      icon: <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    },
    {
      name: "linkedin.com/in/srihari-srivatsa",
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
      name: "Phone",
      url: "tel:+5089697100",
      icon: <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>,
      display: "(508) 969-7100"
    }
  ];

  const sections = [
    {
      id: "about",
      title: "About Me",
      content: "Nice to meet you! I'm Srihari Srivatsa and I am a dedicated senior majoring in Computer Science at UMass Amherst. My passion for computer science stems from my innate curiosity and thirst for knowledge. I love taking incredibly hard classes, watching YouTube videos, and learning new concepts wherever I can. I want to turn theoretical to tangible, creating a physical product customers can look to. \n\nOutside of my professional life, I am an experienced Carnatic Violinist and Saxophonist, and I perform around New England and in India. I also enjoy playing table tennis and badminton, as well as weightlifting at the gym! ",
      icon: "👋"
    },
    {
      id: "interests",
      title: "Career Interests",
      content: "I will be graduating from UMass Amherst in May 2025 with a B.S. in Computer Science. Right now I am preparing for early career positions in Cybersecurity and Software Engineering. I plan to eventually pursue a Masters degree in Cybersecurity, with a research focus on Security for Machine Learning, and potentially a PhD.",
      icon: "🎯"
    },
    {
      id: "skills",
      title: "Technical Skills",
      content: `{
  "languages": ["Python", "C", "TypeScript", "Javascript", "Java", "Dart"],
  "frameworks": {
    "frontend": ["Angular", "React", "Flutter"],
    "backend": ["Flask", "Django", "FastAPI"]
  },
  "AI_tools": ["LangChain", "GeminiAI", "VertexAI", "RAG Pipelines"],
  "databases": ["MongoDB", "PostgreSQL"] ,
  "tools": ["Git", "Docker", "Linux", "Shell", "ESP-IDF"],
  "security_tools": ["Wireshark", "Nmap", "Ghidra", "Metasploit"]
}`,
      icon: "💻"
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
      <header className="portfolio-header">
        <h1>Welcome to My Portfolio!</h1>
        <div className="profile-container">
          <img 
            src="/pfp.png" 
            alt="Srihari Srivatsa" 
            className="profile-image"
          />
          <p className="profile-caption">B.S. Computer Science at UMass Amherst</p>
        </div>
        <div className="contact-info">
          <div className="social-links">
            {socialLinks.map(social => (
              <a 
                key={social.name}
                href={social.url}
                target={social.name === "Email" || social.name === "Phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                {social.display || social.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="info-sections">
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
      
      <h2 className="section-title">My Projects</h2>
      <main className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <h2 style={{ 
                fontSize: '2rem', 
                color: '#61dafb',
                textAlign: 'center',
                padding: '2rem'
              }}>
                {project.title}
              </h2>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
