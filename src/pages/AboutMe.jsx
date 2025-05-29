import React, { useState, useEffect } from "react";
import { QRCodeSVG } from 'qrcode.react';
import styles from "../styles/AboutMe.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaLinkedin, FaGithub } from "react-icons/fa";
import PassPic from "../assets/n@A.jpg"

const AboutMe = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const interval = setInterval(() => setCurrentTime(new Date()), 1000);
  return () => clearInterval(interval);
}, []);
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.clock}>
  Indian Time (IST): {currentTime.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}
</p>
 <p className={styles.clock}>
  Kuwait Time : {currentTime.toLocaleTimeString("en-IN", { timeZone: "Asia/Kuwait" })}
</p>


      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.tagline}>Full-stack Developer | Problem Solver | Tech Enthusiast</p>

      <div className={styles.topSection}>
        <img src={PassPic} alt="Nidhin Babu" className={styles.avatar} />
<div className={styles.qrHead} >
<div className={styles.qrSection}>
  <h4>Scan for LinkedIn</h4>
   <QRCodeSVG value="https://www.linkedin.com/in/nidhinbabu44" size={128} />
</div>
  <div className={styles.qrSection}>
    <h4>Resume</h4>
    <QRCodeSVG value="/NidhinBabu_Resume.pdf" size={128} />
  </div>
</div>
        <p className={styles.summary}>
          I am a highly motivated and detail-oriented <strong>Software Engineer</strong> with a strong foundation in <strong>full-stack web and mobile development</strong>. My expertise lies in building scalable, secure, and user-centric applications using technologies such as <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, and <strong>SQL</strong>.

          <br /><br />
          I’ve contributed to enterprise-level projects in oil & gas, healthcare, and utilities, delivering performance-optimized applications aligned with business goals. Skilled in modern development practices, Agile, and DevOps collaboration.

          <br /><br />
          Outside of development, I’m passionate about emerging tech, continuous learning, and mentoring. I value clean, maintainable code and thrive in collaborative environments.
        </p>
      </div>

      <div className={styles.gridSection}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Tech Stack</h3>
          <p className={styles.techList}>
            React • Node.js • Next.js • Express • SQL • MongoDB • Git • Docker • AWS
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Contact Info</h3>
          <ul className={styles.infoList}>
            <li><FaEnvelope /> nidhinbabu44@gmail.com</li>
            <li><FaMapMarkerAlt /> Pathanamthitta, Kerala, India</li>
            <li><FaBirthdayCake /> 15 November 1997</li>
            <li><FaLinkedin /> <a href="https://www.linkedin.com/in/nidhinbabu44" target="_blank" rel="noreferrer">linkedin.com/in/nidhinbabu44</a></li>
            <li><FaGithub /> <a href="https://github.com/nidhinbabu44" target="_blank" rel="noreferrer">github.com/nidhinbabu44</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.resumeBox}>
        <a href="/NidhinBabu_Resume.pdf" download className={styles.downloadBtn}>
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;