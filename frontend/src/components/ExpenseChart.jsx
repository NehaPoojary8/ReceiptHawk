import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Medical", value: 200 }
];

function ExpenseChart() {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={150}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default ExpenseChart;