import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import Dev from "./Dev"
import Academia from "./Academia"
import About from "./About"

function App() {
  return (
      <BrowserRouter>
	  <nav>
	      <Link to="/">Home</Link> | {" "}
	      <Link to="/dev">Coding</Link> | {" "}
	      <Link to="/academia">Academia</Link> | {" "}
	      <Link to="/about">About me</Link>
	  </nav>

	  <Routes>
	      <Route path="/" element={<Home/>}/>
	      <Route path="/dev" element={<Dev/>}/>
	      <Route path="/academia" element={<Academia/>}/>
	      <Route path="/about" element={<About/>}/>
	  </Routes>

	  <footer className="main-footer">
	      <div className="social-links">
		  <a href="https://gitlab.com/uamoti" target="_blank" rel="noopener noreferrer">GitLab</a> | {" "}
		  <a href="https://github.com/uamoti" target="_blank" rel="noopener noreferrer">GitHub</a> | {" "}
		  <a href="https://linkedin.com/in/bmsoliveira" target="_blank" rel="noopener noreferrer">LinkedIn</a> | {" "}
		  <a href="https://orcid.org/0000-0002-1606-432X" target="_blank" rel="noopener noreferrer">ORCiD</a>
	      </div>
	  </footer>
    </BrowserRouter>
  )
}

export default App
