import React, { useState, useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import './Array2.css'
import { samplecontext } from './App';

const Array2 = () => {
    const {value,setvalue} = useContext(samplecontext)
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState('bar');
  const chartRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (Array.isArray(value)) {
        setChartData(value);
        console.log(chartData)
      } else {
        throw new Error('Data received is not an array');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (chartData.length > 0) {
      createChart();
    }
  }, [chartData]);

  const createChart = () => {
    const ctx = document.getElementById('chart');
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy previous chart instance
      }
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels: chartData.map((item) => item.name),
          datasets: [
            {
              label: 'Data',
              data: chartData.map((item) => item.mark),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
        },
      });
    }
  };

  const toggleChartType = (type) => {
    setChartType(type);
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart instance
      createChart();
    }
  };

  return (
    <div>
      <canvas id="chart"></canvas>
      <button onClick={() => toggleChartType('bar')}>Bar Chart</button>
      <button onClick={() => toggleChartType('line')}>Line Chart</button>
    </div>
  );
};

export default Array2;
