import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="hero-greeting"><span className="material-symbols-outlined" style={{ fontSize: '1.25rem', verticalAlign: 'middle', marginRight: '0.5rem' }}>waving_hand</span>Welcome to my portfolio</span>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Ahmad Edris</span>
                        <br />
                        Full-Stack Developer
                    </h1>

                    <p className="hero-description">
                        I build exceptional digital experiences that live on the web.
                        Specializing in creating modern, scalable applications with clean code
                        and intuitive user interfaces.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">
                            View My Work
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get In Touch
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
