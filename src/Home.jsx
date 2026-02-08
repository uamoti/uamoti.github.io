import brutalLegendImage from './assets/brutal-legend-2.png';

function Home() {
    return (
	<div className="home-content">
	    <div className="logo">
		<img src={brutalLegendImage} alt="Avatar of a headbanger"/>
	    </div>
	    <div>
		<p>Hi there,</p>
		<p>Thanks for visiting my humble corner of the web.</p>
		<p>I'm Bernardo, a full stack student at kood/Sisu.</p>
		    <p>
			I'm interested in back end development and automation.
			Here you can follow a bit of my journey from biomedical researcher to coding wizard.
		    </p>
	    </div>
	</div>
    )
}
	    
export default Home
