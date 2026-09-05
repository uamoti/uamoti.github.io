import brutalLegendImage from './assets/brutal-legend-2.png';

function Home() {
    return (
        <div className="home-content">
            <div className="logo">
                <img src={brutalLegendImage} alt="Avatar of Bernardo" />
            </div>
            <div className="intro-text">
                <h1>Hi, I'm Bernardo</h1>
                <p className="subtitle">Biomedical Researcher &rarr; Software Engineer</p>
                <p>
                    Transitioning from a career in biomedical science and academic research into software engineering. 
                    From my academic background, I bring solid hands-on experience with data analysis and visualisation.
                </p>
                <p>
                    Currently, I'm a full stack student at <strong>kood/Sisu</strong>. I focus my studies primarily on back end 
                    development with <strong>Go</strong>, alongside full stack web technologies including <strong>JavaScript</strong> and <strong>React</strong>.
                </p>
            </div>
        </div>
    );
}

export default Home;
