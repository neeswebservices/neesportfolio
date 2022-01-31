import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/inc/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Service from "./components/service";
import Blog from "./components/blog";
import Pagenotfound from "./components/pagenotfound";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				iimiiiiiasdfdfsafsdfsdafds
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/skills' element={<Skills />}></Route>
				<Route path='/service' element={<Service />}></Route>
				<Route path='/blog' element={<Blog />}></Route>
				<Route path='*' element={<Pagenotfound />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
