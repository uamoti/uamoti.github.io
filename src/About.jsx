import metalDevImage from './assets/metal_utvecklare.jpeg';

function About() {
    return (
        <div 
            className="about-container" 
            style={{ backgroundImage: `url(${metalDevImage})` }}
        >
            <div className="academia-card">
                <h2>About Me</h2>
                <p>This section is currently under construction.</p>
                <p>Please check back later!</p>
            </div>
        </div>
    );
}

export default About;
