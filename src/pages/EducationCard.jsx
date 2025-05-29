import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/EducationCard.module.css";
import { mzc_edu, stc_edu, nss_edu, abhs_edu } from "../assets";



const educationData = [
  {
    title: "MCA",
    institution: "Mount Zion College",
    duration: "10/2020 - 09/2022",
    website: "https://www.mzce.ac.in/",
    imgSrc: mzc_edu,
    spanTag: "3 years ago",
    reads: "3224",
    views: "7",
    comment: "21",
    color: "rgb(248, 51, 84)",
    desc: "Established in 2001. College of Engineering was at Kadammanitta, Pathanamthitta District, Kerala, India. Affiliated to KTU (APJ Abdul Kalam Technological University) in Thiruvananthapuram ",
  },
  {
    title: "BCA",
    institution: "St Thomas College",
    duration: "06/2016 - 03/2019",
    website: "https://www.stthomascollegekonni.com/",
    imgSrc: stc_edu,
    spanTag: "6 years ago",
    reads: "1699",
    views: "11",
    comment: "27",
    color: "orange",
    desc:"Established in 2012. Arts & Science educational institution affiliated to the Mahatma Gandhi University, Kottayam established by Malankara Orthodox Church, Diocese of Thumpamon, Pathanamthitta.",
  },
  {
    title: "Higher Secondary",
    institution: "NSS HSS Thattayil",
    duration: "06/2015 - 05/2016",
    website: "https://schools.org.in/pathanamthitta/32120500217/nsshss-thattayil.html",
    imgSrc: nss_edu,
    spanTag: "8 years ago",
    reads: "1624",
    views: "4",
    comment: "17",
    color: "green",
    desc:"Established in 1947 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in PANDALAM block of PATHANAMTHITTA district of Kerala.",
  },
  {
    title: "Secondary School",
    institution: "ABHS Omalloor",
    duration: "06/2013 - 05/2014",
    website: "https://schools.org.in/pathanamthitta/32120401808/arya-bharati-hs-omalloor.html",
    imgSrc: abhs_edu,
    spanTag: "11 years ago",
    reads: "1244",
    views: "2",
    comment: "12",
    color: "blue",
    desc:"Established in 1932 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in KOZHENCHERRY block of PATHANAMTHITTA district of Kerala.",
  },
];

const EducationCard = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 50,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Education Details</h2>
      <p className={styles.description}>A breakdown of my educational journey.</p>
      <div className={styles.container}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={styles.card}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => handleCardClick(edu.website)}
          >
            <img src={edu.imgSrc} alt={edu.title} className={styles.image} />
            <span className={styles.tag} style={{ backgroundColor: edu.color }}>
              {edu.spanTag}
            </span>
            <h2 className={styles.title}>{edu.title}</h2>
            <div className={styles.cardContent}>
              <h3>{edu.institution}</h3>
              <p>{edu.duration}</p>
              <p className={styles.para}>
                {edu.desc}
              </p>
            </div>
            <div className={styles.stats}>
              <span>👁️ {edu.views}</span>
              <span>💬 {edu.comment}</span>
              <span>📚 {edu.reads}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
