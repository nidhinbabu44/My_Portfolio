import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

const BubbleProjectChart = ({ data }) => {
  const formatData = () => {
    const bubbles = [];

    data.forEach((company, companyIndex) => {
      const isAlessa = company.company === "Alessa Group";
      const yBase = isAlessa ? 6 : 2;

      company.subProjects.forEach((org, orgIndex) => {
        org.projects.forEach((project, projectIndex) => {
          bubbles.push({
            x: orgIndex * 3 + projectIndex, // Spread along x-axis
            y: yBase + Math.random(), // Slight vertical spread within band
            z: 10 + project.description.length / 20, // Bubble size
            name: project.title,
            description: project.description,
          });
        });
      });
    });

    return bubbles;
  };

  const chartOptions = {
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy",
    },
    title: {
      text: "Industry Projects Bubble Chart",
    },
    xAxis: {
      title: { text: "Project Groups" },
      gridLineWidth: 1,
    },
    yAxis: {
      title: { text: null },
      gridLineWidth: 1,
      min: 0,
      max: 12,
      plotBands: [
        {
          from: 5.5,
          to: 11,
          color: "rgba(26, 115, 232, 0.05)",
          label: {
            text: "ATS",
            align: "center",
            style: {
              color: "#1a73e8",
              fontWeight: "bold",
            },
          },
        },
        {
          from: 0,
          to: 5.5,
          color: "rgba(255, 87, 34, 0.05)",
          label: {
            text: "KTS",
            align: "center",
            style: {
              color: "#ff5722",
              fontWeight: "bold",
            },
          },
        },
      ],
    },
    tooltip: {
      useHTML: true,
      headerFormat: "<b>{point.name}</b><br/>",
      pointFormat: "<b>Description:</b> {point.description}",
    },
    plotOptions: {
      bubble: {
        minSize: 10,
        maxSize: 60,
      },
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        name: "Projects",
        colorByPoint: true,
        data: formatData(),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default BubbleProjectChart;
