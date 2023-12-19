import { BarChart, Bar } from 'recharts';
import './Css/Att_En.css';

const data = [
  { name: 'New', students: 300 },
  { name: 'Returning', students: 200 },
];

export default function EnrollmentChart() {
  return (
    <div className="enrollment-chart">
      <h1>
        This is the Enrollment Chart
      </h1>
    <BarChart width={400} height={300} data={data}>
      <Bar dataKey="students" fill="#8884d8" />
    </BarChart>
 </div>);
}