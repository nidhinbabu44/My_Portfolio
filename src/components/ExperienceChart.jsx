import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EducationChart = () => {
  const options = {
    chart: {
      type: 'column',  // Changed to column chart to visually separate each experience
    },
    title: {
      text: 'Work Experience Timeline',
    },
    xAxis: {
      categories: [
        'Software Engineer - AL-Essa Group',
        'Software Engineer - Kyurius Tech Studios',
        'Web Developer - Rayuwa Home Health Solutions'
      ],
      title: {
        text: 'Roles',
      },
    },
    yAxis: {
      title: {
        text: 'Duration (Months)',
      },
    },
    series: [
      {
        name: 'Duration',
        data: [24, 13, 6], // Each duration in months (8 months, 13 months, 6 months)
      },
    ],
    tooltip: {
      pointFormat: '{point.category}: {point.y} months',
    },
  };

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EducationChart;
