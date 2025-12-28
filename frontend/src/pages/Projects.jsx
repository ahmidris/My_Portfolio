import { useState, useEffect, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';

const API_URL = 'http://localhost:5000/api/projects';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }

            const data = await response.json();
            setProjects(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Get all unique tech tags for filtering
    const allTechTags = useMemo(() => {
        const tags = new Set();
        projects.forEach(project => {
            project.tech.forEach(tech => tags.add(tech));
        });
        return ['All', ...Array.from(tags).sort()];
    }, [projects]);

    // Filter projects based on selected tech
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(project => project.tech.includes(activeFilter));
    }, [projects, activeFilter]);

    if (loading) {
        return (
            <section className="page">
                <div className="container">
                    <div className="page-header">
                        <h1>My Projects</h1>
                        <p>A collection of my recent work and side projects</p>
                    </div>
                    <div className="loading">
                        <div className="spinner"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="page">
                <div className="container">
                    <div className="page-header">
                        <h1>My Projects</h1>
                        <p>A collection of my recent work and side projects</p>
                    </div>
                    <div className="error-message">
                        <p>⚠️ {error}</p>
                        <button onClick={fetchProjects} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Try Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="page">
            <div className="container">
                <div className="page-header">
                    <h1>My Projects</h1>
                    <p>A collection of my recent work and side projects</p>
                </div>

                <div className="projects-filter">
                    {allTechTags.map(tag => (
                        <button
                            key={tag}
                            className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                            onClick={() => setActiveFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
                        No projects found for "{activeFilter}"
                    </p>
                )}
            </div>
        </section>
    );
}

export default Projects;
