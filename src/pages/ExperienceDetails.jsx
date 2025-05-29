import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/ExperinceDetails.module.css"
import { ATS_exp, RHS_exp, KTS_exp } from "../assets";
const experienceData = [
  {
    company: "AL-Essa Group",
    role: "Software Engineer",
    duration: "08/2023 - Present",
    location: "Kuwait",
    website: "https://www.alessagroup.com/",
    skills: ["React JS", "Node JS", "MS-SQL", "CORE-JAVA","CI/CD pipelines ","LIMS-LABVANTAGE","N-Map", "SERVER CONFIGURATION"],
    imgSrc: ATS_exp,
    spanTag: "Present",
    color: "rgb(248, 51, 84)"
  },
  {
    company: "Kyurius Tech Studios",
    role: "Software Engineer",
    duration: "05/2022 - 06/2023",
    location: "Bangalore, India",
    website: "https://kyurius.tech/",
    skills: ["React JS", "React Native", "Next JS", "JavaScript", "API Integration"],
    imgSrc: KTS_exp,
    spanTag: "3 year ago",
    color: "orange"
  },
  {
    company: "Rayuwa Home Health",
    role: "Web Developer",
    duration: "05/2019 - 11/2019",
    location: "Bangalore, India",
    website: "https://rayuwa.com/",
    skills: ["UI/UX", "Bootstrap", "CSS Flexbox"],
    imgSrc: RHS_exp,
    spanTag: "6 years ago",
    color: "green"
  },
];

const ExperienceDetails = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 50,
      y: 20,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.heading}>Experience Details</h2>
      <p className={styles.description}>A breakdown of my professional journey.</p>

      <div className={styles.cardsWrapper}>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
            onClick={() => handleCardClick(exp.website)}
            style={{ borderColor: exp.color }}
          >
            <img src={exp.imgSrc} alt={exp.company} className={styles.cardImage} />
            <span className={styles.spanTag}>{exp.spanTag}</span>
            <h2 className={styles.contentHead}>{exp.company}</h2>
            <p className={styles.contentPara}>{exp.role}</p>
            <p className={styles.duration}>{exp.duration}</p>
            <p className={styles.location}>{exp.location}</p>
            
            <div className={styles.skills}>
              {exp.skills.map((skill, i) => (
                <span key={i} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDetails;
