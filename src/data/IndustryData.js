// src/data/industryData.js

import ATS_exp from '../assets/ATS_exp.jpg'; // update with actual paths
import KTS_exp from '../assets/KTS_exp.jpg';
import knpc_project from '../assets/knpc_project.jpg';
import mew_project from '../assets/mew_project.jpg';
import moh_project from '../assets/moh_project.jpg';
import moi_project from '../assets/moi_project.jpg';
import kyurius_project from '../assets/kyurius_project.jpg';
import chempure_project from '../assets/chempure_project.jpg';
import aol_project from '../assets/aol_project.jpg';
import clo_project from '../assets/clo_project.jpg';

export const industryProjects = [
  {
    company: "Alessa Group",
    logo: ATS_exp,
    duration: "2022 - Present",
    location: "Kuwait",
    color: "#1a73e8",
    subProjects: [
      {
        organization: "KNPC - Kuwait National Petroleum Corporation",
        logo: knpc_project,
        projects: [
          {
            title: "Web LIMS",
            description:
              "This system streamlines the tracking and management of laboratory samples, results, and workflows. Real-time data entry, and integration with external instruments, enhancing lab efficiency and regulatory compliance.",
          },
          {
            title: "Highcharts-Based Dashboard",
            description:
              "Designed an interactive dashboard for KNPC using Highcharts to visualize lab data trends, performance metrics, and statistical summaries. The tool allows users to filter data by date range, sample type, and lab status, supporting informed decision-making.",
          },
          {
            title: "Sample Request Form",
            description:
              "A web-based form module for KNPC that handles internal sample submission, approval flows, and attachment uploads. Built with React and integrated with backend APIs for automated notifications and status tracking.",
          },
        ],
      },
      {
        organization: "MEW - Ministry of Electricity and Water",
        logo: mew_project,
        projects: [
          {
            title: "Corrolab Request",
            description: "Managed corrosion lab requests and test tracking for WRDC users.",
          },
          {
            title: "Sample Point",
            description: "System to register sampling points and their testing frequency.",
          },
        ],
      },
      {
        organization: "MOH - Ministry of Health",
        logo: moh_project,
        projects: [
          {
            title: "Sample Portal",
            description:
              "Created a centralized portal for submitting samples to the Kuwait Drug Lab, enabling seamless and secure submission workflows.",
          },
        ],
      },
      {
        organization: "MOI - Ministry of Interior",
        logo: moi_project,
        projects: [
          {
            title: "Automated File Sorter",
            description:
              "Developed a utility to organize large volumes of instrument-generated data using advanced sorting techniques for better manageability.",
          },
        ],
      },
    ],
  },
  {
    company: "Kyurius Tech Studios",
    logo: KTS_exp,
    duration: "2020 - 2022",
    location: "Kuwait",
    color: "#ff5722",
    subProjects: [
      {
        organization: "Kyurius Tech Studios",
        logo: kyurius_project,
        projects: [
          {
            title: "Web Application",
            description: "Developed multiple web apps focused on client management and automation.",
          },
        ],
      },
      {
        organization: "Chempure Pvt Ltd",
        logo: chempure_project,
        projects: [
          {
            title: "Web development",
            description: "Application to manage and allocate products efficiently within the company.",
          },
        ],
      },
      {
        organization: "Art Of Living",
        logo: aol_project,
        projects: [
          {
            title: "Ecommerce Application",
            description: "Developed a full-featured ecommerce platform with payment integrations (Razorpay).",
          },
        ],
      },
      {
        organization: "CLO Technologies",
        logo: clo_project,
        projects: [
          {
            title: "App Development",
            description:
              "Built a dynamic React app to improve user engagement, workflow and stock allocation.",
          },
        ],
      },
    ],
  },
];
