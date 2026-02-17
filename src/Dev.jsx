const projects = [
    {
	id: "js4",
	name: "Sport Buddy",
	url: "https://gitlab.com/uamoti/sport-buddy",
	stack: ["Go", "Postgres", "REST API", "React", "JWT", "Web sockets"],
	summary: `Social app to connect people with similar interests, in this case
sports. The app provides you a list of matches within a search radius and you can
check their profiles to decide whether or not to connect with them.
Once connected, you can chat in real time.`
    }, {
	id: "js3",
	name: "Race Track",
	stack: ["Node", "SQLite", "Web sockets"],
	summary: `This is an MVP for managing a race track. We have created different
interfaces for the different roles, e.g., receptionist, driver, spectator, etc.`
    }, {
	id: "go4",
	name: "Literary Forum",
	url: "https://gitlab.com/uamoti/lions-forum",
	stack: ["Go", "SQLite", "(Go) HTML templating", "Docker"],
	summary: `A forum for book lovers. Registered users can post and comment; others can
view and search posts. You can filter posts/comments by user, category and trending.`
    }, {
	id: "go2",
	name: "Cars",
	stack: ["Go", "Goroutines", "REST API"],
	summary: `A simple website for car retailers. You can filter the vehicles
based on characteristics such as manufacturer, engine, HP, etc. You can select up to
3 vehicles for comparison, and recently viewed models are displayed at the bottom`
    }
]

import { useState } from 'react';

function Dev() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentProject = projects[currentProjectIndex];
    const projectName = currentProject.url ? <a href={currentProject.url} target="_blank" rel="noopener noreferrer">{currentProject.name}</a> : currentProject.name

    return (
	<>
	    <h3>
		These are some of the main projects I've worked on during my studies.
	    </h3>
            <div className="project-carousel-container">
		<button onClick={handlePrevClick} className="carousel-button prev">
                    &lt;
		</button>
		<div className="project-carousel-display">
                    <div className="project-card">
			<h3>{projectName}</h3>
			<div className="project-summary">{currentProject.summary}</div>
			<h4>Stack</h4>
			<ul className="stack">
                            {currentProject.stack.map((tech, index) => (
				<li key={index}>{tech}</li>
                            ))}
			</ul>
                    </div>
		</div>
		<button onClick={handleNextClick} className="carousel-button next">
                    &gt;
		</button>
            </div>
	    </>
    );
}

export default Dev

