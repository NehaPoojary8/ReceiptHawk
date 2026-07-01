import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", expense: 5000 },
  { month: "Feb", expense: 7000 },
  { month: "Mar", expense: 3000 }
];

function ReportChart() {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="expense" fill="#8884d8" />
    </BarChart>
  );
}

export default ReportChart;