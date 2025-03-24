import React, { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const handleAddProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  };

  const handleDeleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1>Mon Site de PRESENTATION</h1>
      </header>

      {/* SECTION À PROPOS - Version simplifiée */}
      <section className="about">
        <h2>À PROPOS DE MOI</h2>
        <div style={{ textAlign: "center" }}>
          <img 
            src="/images/photo-de-profil.jpg" 
            alt="" 
            className="profile-pic"
            style={{
              width: "250px",          /* Taille augmentée */
        height: "250px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </div>
        <p className="about-text">
        Je suis <strong>Joseph KAFACK</strong>, génie-civiliste de formation, passionné par les métiers de
          l'électricité et de l'eau. Avec une expérience dans sept pays, je suis un <strong>TECHNICIEN MULTI-METIERS</strong> et un
          manager toujours en quête de nouveaux défis.
        </p>
      </section>

      {/* SECTION FORMATIONS */}
      <section className="formations">
        <h2>FORMATIONS</h2>
        <ul className="formations-list">
        <li><strong>2023</strong> - ACADEMY A21 : Développement Personnel, Marketing Relationnel, Management Financier</li>
          <li><strong>2017-2023</strong> - FFG Jakarta : Bootcamp en Développement Personnel Management Humain</li>
          <li><strong>Juillet 2006</strong> - Forces Armées Gabonaises : Formation Incendie, Équipier de 1ère intervention</li>
          <li><strong>Octobre 2006</strong> - Cabinet Qualité-Conseil-Management, Côte d'Ivoire : Management par la Qualité</li>
          <li><strong>Février 2007</strong> - CEPIC Paris : Passeport Formation Management</li>
          <li><strong>1989</strong> - Lycée Technique de Bertoua : Baccalauréat Génie-Civil</li>
        </ul>
      </section>

      {/* SECTION PROJETS */}
<section className="projects">
  <h2>MES PROJETS</h2>
  <div className="project-input-container">
    <input
      type="text"
      placeholder="Ajouter un projet..."
      value={newProject}
      onChange={(e) => setNewProject(e.target.value)}
      className="project-input"
      onKeyDown={(e) => e.key === 'Enter' && handleAddProject()}
    />
    <button onClick={handleAddProject} className="add-btn">
      Ajouter
    </button>
  </div>
  <ul className="projects-list">
    {projects.map((project, index) => (
      <li
        key={index}
        className="project-item"
      >
        <span>{project}</span>
        <button
          onClick={() => handleDeleteProject(index)}
          className="delete-btn"
        >
          ✖
        </button>
      </li>
    ))}
  </ul>
</section>

      {/* PIED DE PAGE CONTACT */}
      <footer className="contact">
        <h2>CONTACTS</h2>
        <p>📧 Courriel : <a href="mailto:kafackjoseph@yahoo.fr" className="custom-link">kafackjoseph@yahoo.fr</a></p>
        <p>🔗 LinkedIn : <a href="https://www.linkedin.com/in/joseph-kafack-71a831270" target="_blank" rel="noopener noreferrer" className="custom-link">Mon profil</a></p>
      </footer>
    </div>
  );
}

export default App;