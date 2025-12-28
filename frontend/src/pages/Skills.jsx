function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: 'palette',
            skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Next.js', 'Vue.js', 'Redux']
        },
        {
            title: 'Backend Development',
            icon: 'terminal',
            skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
        },
        {
            title: 'DevOps & Tools',
            icon: 'build',
            skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Nginx', 'Vercel', 'Firebase']
        },
        {
            title: 'Design & Other',
            icon: 'auto_awesome',
            skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Agile/Scrum', 'Testing', 'Performance']
        }
    ];

    return (
        <section className="page">
            <div className="container">
                <div className="page-header">
                    <h1>Skills & Expertise</h1>
                    <p>Technologies and tools I work with to bring ideas to life</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>
                                <span className="material-symbols-outlined skill-category-icon">{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
