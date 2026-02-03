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
    </BrowserRouter>
  )
}

export default App
