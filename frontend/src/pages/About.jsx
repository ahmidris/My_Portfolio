import profilePhoto from '../assets/photo_2025-12-28_09-52-38.jpg';

function About() {
    return (
        <section className="page">
            <div className="container">
                <div className="page-header">
                    <h1>About Me</h1>
                    <p>Get to know more about who I am and what I do</p>
                </div>

                <div className="about-content">
                    <div className="about-image" style={{ background: 'none', overflow: 'hidden' }}>
                        <img src={profilePhoto} alt="Ahmad Edris" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                    </div>

                    <div className="about-text">
                        <h2>Hello! I'm Ahmad Edris</h2>

                        <p>
                            I'm a passionate Full-Stack Developer based in Addis Ababa, Ethiopia, with experience
                            in building web applications. I specialize in creating efficient,
                            scalable, and user-friendly solutions that help businesses achieve their goals.
                        </p>

                        <p>
                            My journey in tech started when I built my first website at 15. Since then,
                            I've worked with startups and established companies, helping them bring their
                            ideas to life through clean code and thoughtful design.
                        </p>

                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing
                            to open-source projects, or enjoying a good cup of coffee while reading about
                            the latest industry trends.
                        </p>

                        <div className="about-details">
                            <div className="about-detail">
                                <div className="about-detail-label">Name</div>
                                <div className="about-detail-value">Ahmad Edris</div>
                            </div>
                            <div className="about-detail">
                                <div className="about-detail-label">Location</div>
                                <div className="about-detail-value">Addis Ababa, Ethiopia</div>
                            </div>
                            <div className="about-detail">
                                <div className="about-detail-label">Email</div>
                                <div className="about-detail-value">ahmidris2030@gmail.com</div>
                            </div>
                            <div className="about-detail">
                                <div className="about-detail-label">Availability</div>
                                <div className="about-detail-value">Open to opportunities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
