import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayoutWrapper from "./components/DashboardLayoutWrapper";
import Home from "./pages/Home";
import My_Portfolio from "./pages/My_Portfolio";
import Experience from "./pages/ExperienceDetails";
import EducationCard from "./pages/EducationCard";
import AboutMe from "./pages/AboutMe";
import AcademicProjects from "./pages/AcademicProjects";
import JobProjects from "./pages/JobProjects";
import { industryProjects } from './data/IndustryData'; 
import NotFound from "./pages/NotFound";
import "./styles.css";
import ContactMe from "./components/Contact";






const App = () => {



    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68370fc64ff23c190dcde1a1/1isbhb8fk";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayoutWrapper />}>

          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="My_Portfolio" element={<My_Portfolio />} />
          <Route path="education" element={<EducationCard />} />
          <Route path="projects">
            <Route path="academic" element={<AcademicProjects />} />
            <Route path="industry" element={<JobProjects industryProjects={industryProjects}  />} />
          </Route>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contactme" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
