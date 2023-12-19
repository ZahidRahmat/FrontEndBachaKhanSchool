import { Pie } from 'react-chartjs-2';

const PerformanceChart = () => {
  const data = {
    labels: ['Math', 'English', 'Science', 'History'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PerformanceChart;
