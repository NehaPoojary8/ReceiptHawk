import {
  PieChart,
  Pie,
  Tooltip,
  Cell
} from "recharts";

const COLORS = [
  "#a78bfa",
  "#818cf8",
  "#6d28d9",
  "#22c55e",
  "#f59e0b",
  "#ef4444"
];

function ExpenseChart({
  data = []
}) {
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
          <Cell
            key={index}
            fill={
              COLORS[
                index % COLORS.length
              ]
            }
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

export default ExpenseChart;