import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Enrollment Trends',
      data: [150, 180, 200, 220, 250, 270],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const options = {
  scales: {
    x: { type: 'linear', position: 'bottom' },
    y: { type: 'linear', position: 'left' },
  },
};

const EnrollmentTrendsChart = () => <Line data={data} options={options} />;

export default EnrollmentTrendsChart;
