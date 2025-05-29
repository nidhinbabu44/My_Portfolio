// pages/AcademicProjects.js

import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const academicProjects = [
  {
    title: "Intelligent Industry Quality and Depth Sensing Camera (IIQDSC)",
    description: "Designed to validate the accuracy of printed QR codes using a depth sensing camera. The system detects printing defects by analyzing the depth and clarity of the barcode, helping identify issues such as damaged printer nozzles or misaligned prints.",
  },
  {
    title: "CO-LIFE – Covid Life Management System",
    description: "A centralized healthcare portal developed to maintain patient records, vaccination history, and dosage tracking. It allows healthcare providers to register patients, record vaccine doses administered, and manage COVID-related medical data efficiently.",
  },
  {
    title: "A-M-S – Advanced Attendance Management System",
    description: "A web-based attendance solution for colleges, managing both faculty and student attendance. The system includes a well-structured profile management feature similar to social media platforms like Facebook, enhancing user engagement and profile visibility.",
  },
  {
    title: "S-M-S – Software Management System",
    description: "Developed to monitor software deliveries and track the deployment status. This tool provides real-time updates on delivery progress and helps organizations maintain visibility and control over distributed software components.",
  },
];

const AcademicProjects = () => {
  return (
    <div>
      {/* <Typography variant="h4" gutterBottom>
        Academic Projects
      </Typography> */}
      <Grid container spacing={3}>
        {academicProjects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AcademicProjects;
