const projects = [
    {
	id: "js4",
	name: "Match Me",
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
	stack: ["Go", "SQLite", "(Go) HTML templating", "Docker"]
    }, {
	id: "go2",
	name: "Cars",
	stack: ["Go", "Goroutines", "REST API"],
	summary: `A simple website for car retailers. You can filter the vehicles
based on characteristics such as manufacturer, engine, HP, etc. You can select up to
3 vehicles for comparison, and recently viewed models are displayed at the bottom`
    }
]

function Dev() {
    const summaryStyle = {
	width: "70%",
	margin: "auto"
    }
    const projectList = projects.map(project =>
	<div>
	    <h3>{project.name}</h3>
	    <h4>Stack</h4>
	    <div>
		{project.stack.map(tech => <div>{tech}</div>)}
	    </div>
	    <br/>
	    <div style={summaryStyle}>{project.summary}</div>
	</div>
    )
    return <ul>{projectList}</ul>
}

export default Dev
