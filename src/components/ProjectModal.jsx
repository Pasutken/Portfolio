function ProjectModal({ project, t, onClose }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="project-modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="project-modal">

        {/* Close */}
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>


        {/* Header */}
        <div className="project-modal-header">

          <p className="project-modal-type">
            {project.type}
          </p>

          <h2>
            {project.title}
          </h2>

          <p className="project-modal-description">
            {project.description}
          </p>

        </div>


        {/* Image */}
        {project.image && (
          <div className="project-modal-image">

            <img
              src={project.image}
              alt={project.title}
            />

          </div>
        )}


        {/* Problem */}
        {project.problem && (
          <div className="project-modal-section">

            <p className="project-modal-label">
              {t.projects.problem}
            </p>

            <p className="project-modal-text">
              {project.problem}
            </p>

          </div>
        )}


        {/* Features */}
        {project.features &&
          project.features.length > 0 && (
            <div className="project-modal-section">

              <p className="project-modal-label">
                {t.projects.features}
              </p>

              <ul className="project-feature-list">

                {project.features.map(
                  (feature, index) => (
                    <li key={index}>
                      <span>+</span>

                      {feature}
                    </li>
                  )
                )}

              </ul>

            </div>
          )}


        {/* Role */}
        <div className="project-modal-section">

          <p className="project-modal-label">
            {t.projects.role}
          </p>

          <p className="project-modal-text">
            {project.role ||
              "Frontend Development & UX/UI Design"}
          </p>

        </div>


        {/* Developed */}
        {project.developed &&
          project.developed.length > 0 && (
            <div className="project-modal-section">

              <p className="project-modal-label">
                {t.projects.developed}
              </p>

              <ul className="project-feature-list">

                {project.developed.map(
                  (item, index) => (
                    <li key={index}>
                      <span>+</span>

                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>
          )}


        {/* Technologies */}
        <div className="project-modal-section">

          <p className="project-modal-label">
            {t.projects.technologies}
          </p>

          <div className="project-modal-tags">

            {project.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}

          </div>

        </div>


        {/* Links */}
        <div className="project-modal-links">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>Git</span>

              GitHub

              <b>↗</b>
            </a>
          )}

          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
            >
              <span>F</span>

              Figma

              <b>↗</b>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <span>↗</span>

              Demo

              <b>↗</b>
            </a>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;