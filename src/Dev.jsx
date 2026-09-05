import StackIcon from "tech-stack-icons";

// Mapping tech names to tech-stack-icons icon keys
const iconMap = {
    Go: "go",
    Postgres: "postgresql",
    "REST API": "openapi",
    React: "react",
    JWT: "json",
    "Web sockets": "socketio",
    SQLite: "sqlite",
    Docker: "docker",
    LXD: "linux",
    "cloud-init": "bash",
    Prometheus: "prometheus",
    Grafana: "grafana",
    ELK: "elastic",
    FastAPI: "python",
    MongoDB: "mongodb",
    Jenkins: "gitlab",
    netdata: "opentelemetry"
};

const TechIcon = ({ name }) => {
    const iconKey = iconMap[name];

    return (
        <span className="tech-icon-wrapper" title={name}>
            {iconKey ? (
                <StackIcon name={iconKey} style={{ width: "24px", height: "24px" }} />
            ) : (
                <span className="tech-fallback-dot" />
            )}
            <span className="tech-label">{name}</span>
        </span>
    );
};

const projects = [
    {
        id: "devops2",
        name: "Sherlogs",
	url: "https://gitlab.com/uamoti/lxd-automation",
        stack: ["LXD", "cloud-init", "Docker", "Prometheus", "Grafana", "ELK", "FastAPI", "MongoDB", "Jenkins", "netdata"],
        summary: `Infrastructure set up to host a simple weather app, where each component is
run as a container. Most of the infrastructure is managed via cloud-init, and monitoring is done via
netdata/Prometheus/Grafana and ELK stack.`
    },
    {
        id: "js4",
        name: "Sport Buddy",
        url: "https://gitlab.com/uamoti/sport-buddy",
        stack: ["Go", "Postgres", "REST API", "React", "JWT", "Web sockets"],
        summary: `Social app to connect people with similar exercise interests.
You get a list of potential matches within a search radius and you can check
their profiles to decide whether or not to connect with them. Once connected,
you can chat in real time.`
    },
    {
        id: "go4",
        name: "Literary Forum",
        url: "https://gitlab.com/uamoti/lions-forum",
        stack: ["Go", "SQLite", "Docker"],
        summary: `A forum for book lovers. Registered users can post and comment; others can
view and search posts. You can filter posts/comments by user, category and trending.`
    }
];

function Dev() {
    return (
        <div className="dev-container">
            <h2>Projects</h2>
            <p className="dev-subtitle">
                A selection of core software and infrastructure projects I have built during my studies.
            </p>
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>
                            {project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            ) : (
                                project.name
                            )}
                        </h3>
                        <p className="project-summary">{project.summary}</p>
                        <h4>Stack</h4>
                        <div className="stack-icons-grid">
                            {project.stack.map((tech) => (
                                <TechIcon key={tech} name={tech} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dev;
