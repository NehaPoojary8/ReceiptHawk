import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Housing", value: 400 },
  { name: "Food", value: 300 },
  { name: "Transportation", value: 200 }
];

const COLORS = ["#a78bfa", "#818cf8", "#6d28d9"];

function ExpenseChart() {
  return (
    <PieChart width={600} height={420}>
      <Pie
        data={data}
        cx={300}
        cy={200}
        outerRadius={140}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default ExpenseChart;