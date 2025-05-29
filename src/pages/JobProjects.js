// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import styles from "../styles/ProjectsDetails.module.css";
// import {
//   ATS_exp,
//   KTS_exp,
//   knpc_project,
//   moi_project,
//   moh_project,
//   mew_project,
//   kyurius_project,
//   clo_project,
//   aol_project,
//   chempure_project,
// } from "../assets";

// const industryProjects = [
//   {
//     company: "Alessa Group",
//     logo:ATS_exp,
//     duration: "2022 - Present",
//     location: "Kuwait",
//     color: "#1a73e8",
//     subProjects: [
//       {
//         organization: "KNPC - Kuwait National Petroleum Corporation",
//         logo: knpc_project,
//         projects: [
//           {
//             title: "Web LIMS",
//             description:
//               "This system streamlines the tracking and management of laboratory samples, results, and workflows. Real-time data entry, and integration with external instruments, enhancing lab efficiency and regulatory compliance.",
//           },
//           {
//             title: "Highcharts-Based Dashboard",
//             description:
//               "Designed an interactive dashboard for KNPC using Highcharts to visualize lab data trends, performance metrics, and statistical summaries. The tool allows users to filter data by date range, sample type, and lab status, supporting informed decision-making.",
//           },
//           {
//             title: "Sample Request Form",
//             description:
//               "A web-based form module for KNPC that handles internal sample submission, approval flows, and attachment uploads. Built with React and integrated with backend APIs for automated notifications and status tracking.",
//           },
//         ],
//       },
//       {
//         organization: "MEW - Ministry of Electricity and Water",
//         logo: mew_project,
//         projects: [
//           {
//             title: "Corrolab Request",
//             description:
//               "Managed corrosion lab requests and test tracking for WRDC users.",
//           },
//           {
//             title: "Sample Point",
//             description:
//               "System to register sampling points and their testing frequency.",
//           },
//         ],
//       },
//       {
//         organization: "MOH - Ministry of Health",
//         logo: moh_project,
//         projects: [
//           {
//             title: "Sample Portal",
//             description:
//               "Created a centralized portal for submitting samples to the Kuwait Drug Lab, enabling seamless and secure submission workflows.",
//           },
//         ],
//       },
//       {
//         organization: "MOI - Ministry of Interior",
//         logo: moi_project,
//         projects: [
//           {
//             title: "Automated File Sorter",
//             description:
//               "Developed a utility to organize large volumes of instrument-generated data using advanced sorting techniques for better manageability.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     company: "Kyurius Tech Studios",
//     logo:KTS_exp,
//     duration: "2020 - 2022",
//     location: "Kuwait",
//     color: "#ff5722",
//     subProjects: [
//       {
//         organization: "Kyurius Tech Studios",
//         logo: kyurius_project,
//         projects: [
//           {
//             title: "Web Application",
//             description:
//               "Developed multiple web apps focused on client management and automation.",
//           },
//         ],
//       },
//       {
//         organization: "Chempure Pvt Ltd",
//         logo: chempure_project,
//         projects: [
//           {
//             title: "Web development",
//             description:
//               "Application to manage and allocate products efficiently within the company.",
//           },
//         ],
//       },
//       {
//         organization: "Art Of Living",
//         logo: aol_project,
//         projects: [
//           {
//             title: "Ecommerce Application",
//             description:
//               "Developed a full-featured ecommerce platform with payment integrations (Razorpay).",
//           },
//         ],
//       },
//       {
//         organization: "CLO Technologies",
//         logo: clo_project,
//         projects: [
//           {
//             title: "App Development",
//             description:
//               "Built a dynamic React app to improve user engagement, workflow and stock allocation.",
//           },
        
//         ],
//       },
//     ],
//   },
// ];

// const IndustryProjects = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     gsap.from(cardRefs.current, {
//       y: 30,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <div className={styles.projectContainer}>
//       <h2 className={styles.heading}>REAL-WORLD EXPERIENCE</h2>
//       <p className={styles.description}>
//         Projects delivered at Alessa Group and Kyurius Tech Studios
//       </p>

//       <div className={styles.cardsWrapper}>
//         {industryProjects.map((company, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className={styles.card}
//             style={{ borderColor: company.color }}
//           >
//              <div className={styles.companyHeader}>
//     <img src={company.logo} alt={company.company} className={styles.companyLogo} />
//     <h3 className={styles.orgName}>{company.company}</h3>
//   </div>
       
//             <p className={styles.subtext}>
//               {company.location} | {company.duration}
//             </p>

//             {company.subProjects.map((org, i) => (
//               <div key={i} className={styles.subCard}>
//                 <div className={styles.header}>
//                   <img src={org.logo} alt={org.organization} className={styles.logo} />
//                   <h4 className={styles.orgTitle}>{org.organization}</h4>
//                 </div>

//                 <div className={styles.projectList}>
//                   {org.projects.map((proj, j) => (
//                     <div key={j} className={styles.projectItem}>
//                       <h5 className={styles.projectTitle}>{proj.title}</h5>
//                       <p className={styles.projectDesc}>{proj.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndustryProjects;
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "../styles/ProjectsDetails.module.css";

const IndustryProjects = ({ industryProjects }) => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.heading}>REAL-WORLD EXPERIENCE</h2>
      <p className={styles.description}>
        Projects delivered at Alessa Group and Kyurius Tech Studios
      </p>

      <div className={styles.cardsWrapper}>
        {industryProjects.map((company, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ borderColor: company.color }}
          >
            <div className={styles.companyHeader}>
              <img
                src={company.logo}
                alt={company.company}
                className={styles.companyLogo}
              />
              <h3 className={styles.orgName}>{company.company}</h3>
            </div>

            <p className={styles.subtext}>
              {company.location} | {company.duration}
            </p>

            {/* Organization Accordions */}
            {company.subProjects.map((org, i) => (
              <Accordion key={i} sx={{ marginBottom: "1rem" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-${i}-content`}
                  id={`panel${index}-${i}-header`}
                >
                  <img
                    src={org.logo}
                    alt={org.organization}
                    className={styles.logo}
                    style={{ marginRight: 10, width: 40, height: 40 }}
                  />
                  <Typography variant="h6">{org.organization}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.projectList}>
                    {org.projects.map((proj, j) => (
                      <div key={j} className={styles.projectItem}>
                        <h5 className={styles.projectTitle}>{proj.title}</h5>
                        <p className={styles.projectDesc}>{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryProjects;
