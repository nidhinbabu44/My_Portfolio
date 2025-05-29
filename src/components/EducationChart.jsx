import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EducationChart = () => {
  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Education Timeline',
    },
    xAxis: {
      categories: ['MCA', 'BCA'],
    },
    yAxis: {
      title: {
        text: 'Duration (Years)',
      },
    },
    series: [
      {
        name: 'Duration',
        data: [2, 3], // Duration in years for each degree
      },
    ],
  };

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EducationChart;