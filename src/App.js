import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './Component/AboutUs';
import { Enterprise } from './Component/Enterprise';
import Services from './Component/Services';
import { Project } from './Component/Project';
import { Contact } from './Component/Contact';
import { ProjectHtml } from './Component/ProjectHtml';
import { ProjectReact } from './Component/ProjectReact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element=<Home/> />
      <Route exact path="/Aboutus" element=<AboutUs/> />
      <Route exact path="/Enterprise" element=<Enterprise/> />
      <Route exact path="/Services" element=<Services/> />
      <Route exact path="/Project" element=<Project/> />
      <Route exact path="/Contact" element=<Contact/> />
      <Route exact path="/React" element=<ProjectReact/> />
      <Route exact path="/Html" element=<ProjectHtml/> />
    </Routes>
  </BrowserRouter>


  );
}

export default App;
