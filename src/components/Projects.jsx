import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="section container"
    >
      <div className="section-header">
        <div className="section-label">
          02 — SELECTED WORK
        </div>

        <p>
          A collection of projects and experiments.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <span>
                  {String(project.id).padStart(2, "0")}
                </span>
              )}

              {/* <div className="project-arrow">
                ↗
              </div> */}
            </div>

            <div className="project-info">
              <div>
                <p className="project-type">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>
            </div>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-icon">
                    Git
                  </span>
                  GitHub
                </a>
              )}

              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-icon">
                    F
                  </span>
                  Figma
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-icon">
                    ↗
                  </span>
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;