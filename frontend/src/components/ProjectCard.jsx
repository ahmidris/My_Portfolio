function ProjectCard({ project }) {
    const { title, description, tech, link, image } = project;

    return (
        <article className="project-card">
            {image && (
                <div className="project-image">
                    <img
                        src={image}
                        alt={`${title} preview`}
                        loading="lazy"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.style.display = 'none';
                        }}
                    />
                    <div className="project-image-overlay">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            )}
            <div className="project-content">
                <div className="project-header">
                    <div className="project-icon"><span className="material-symbols-outlined">folder</span></div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${title} project`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="project-tech">
                    {tech.map((item, index) => (
                        <span key={index} className="tag">{item}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
