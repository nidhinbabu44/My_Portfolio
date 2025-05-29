import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";
import SkillsChart from "./SkillsChart";
import ExperienceChart from "./ExperienceChart";
import EducationCard from "./EducationChart";
import ProjectsCard from "./ProjectsChart";
import styles from "../styles/Dashboard.module.css";
import { industryProjects } from '../data/IndustryData';

// import IndustryProjectsAccordion from '../components/IndustryProjectsAccordion';
import BubbleProjectChart from './BubbleProjectChart';

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: true,
        },
        opacity: 10,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className={styles.dashboard}>
      
      {/* Scroll progress bar at the top */}
      <motion.div className={styles.scrollProgress} style={{ scaleX }} />

      {/* Top Cards */}
      <div className={styles.summaryGrid}>
         <div className={styles.card} ref={addToRefs}>
      <div className={styles.resumeDownload} >
      <h3>Let’s Connect – Resume</h3>    
  <a
    href="/NidhinBabu_Resume.pdf"
    download="Nidhin_Babu_Resume.pdf"
    className={styles.downloadBtn}
  >
    Download My Resume
  </a>
</div>
        </div>
   
        <div className={styles.card} ref={addToRefs}>
          <h3>Total Skills</h3>
          <p>12</p>
        </div>
        <div className={styles.card} ref={addToRefs}>
          <h3>Industry Experience</h3>
          <p>4 Years</p>
        </div>
       
      </div>

      {/* Charts */}
      <div className={styles.chartsGrid}>
        <div className={`${styles.chartCard} chartCard`} ref={addToRefs}>
          <h3>Skills Overview</h3>
          <SkillsChart />
        </div>
        <div className={`${styles.chartCard} chartCard`} ref={addToRefs}>
          <h3>Experience</h3>
          <ExperienceChart />
        </div>
      
        <div className={`${styles.chartCard} chartCard`} ref={addToRefs}>
          <h3>Academic Projects</h3>
          <ProjectsCard />
        </div>
           <div className={`${styles.chartCard} chartCard`} ref={addToRefs}>
          <h3>Industry Projects</h3>
                       <BubbleProjectChart data={industryProjects} />
        </div>
          <div className={`${styles.chartCard} chartCard`} ref={addToRefs}>
          <h3>Education</h3>
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
