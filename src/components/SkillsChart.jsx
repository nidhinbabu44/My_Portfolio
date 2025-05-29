import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SkillsChart = () => {
  const chartRef = useRef(null);
  const chartComponentRef = useRef(null);

  useEffect(() => {
    gsap.from(chartRef.current, {
      opacity: 10,
      y: 50,
      duration: 1,
      delay: 0.5,
    });

    // Resize chart when window resizes
    const handleResize = () => {
      if (chartComponentRef.current) {
        chartComponentRef.current.chart.reflow();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    chart: {
      type: 'bar',
      backgroundColor: '#ffffff',
    },
    title: {
      text: 'Skills Overview',
    },
    xAxis: {
      categories: ['React JS', 'Node JS', 'MS-SQL', 'CORE-JAVA', 'React Native', 'Next JS'],
    },
    yAxis: {
      title: {
        text: 'Proficiency',
      },
    },
    series: [
      {
        name: 'Proficiency',
        data: [100, 95, 90, 75, 70, 65],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600, // Adjust layout for small screens
          },
          chartOptions: {
            chart: {
              height: '300px',
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div ref={chartRef} className="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
};

export default SkillsChart;
