import { LineChart, Line } from 'recharts';
import './Css/Att_En.css';

const data = [
  { name: 'Mon', attendance: 40 },
  { name: 'Tue', attendance: 45 },
  { name: 'Wed', attendance: 55 },
  // etc
];

export default function AttendanceChart() {
    return (
        <div className="attendance-chart">
        <h1>
          This is the Attendance Chart
        </h1>
      <LineChart width={400} height={200} data={data}>
        <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
      </LineChart>
      </div>
);}