import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const academicProjects = [
  {
    title: "IIQDSC",
    description:
      "Intelligent Industry Quality and Depth Sensing Camera",
  },
  {
    title: "CO-LIFE",
    description:
      "Covid Life Management System",
  },
  {
    title: "A-M-S",
    description:
      "Advanced Attendance Management System",
  },
  {
    title: "S-M-S",
    description:
      "Software Management System",
  },
];

const ProjectsChart = () => {
  const projectData = academicProjects.map((project) => ({
    name: project.title,
    y: 1, // All equal portions; adjust if you want relative sizes
    description: project.description,
  }));

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Academic Projects Pie Chart',
    },
    tooltip: {
      useHTML: true,
      headerFormat: '<b>{point.name}</b><br/>',
      pointFormat: '{point.description}',
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: { fontSize: '10px', textOverflow: 'ellipsis' },
        },
      },
    },
    series: [
      {
        name: 'Projects',
        data: projectData,
      },
    ],
  };

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProjectsChart;
