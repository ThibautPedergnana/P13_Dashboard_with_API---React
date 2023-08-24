import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE"];

export default function Score({ datas, size }) {
  console.log(size);
  console.log("start", 90);
  console.log("end", size + 90);
  return (
    <PieChart width={258} height={263}>
      <Pie
        data={datas}
        cx={130}
        cy={130}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        startAngle={90}
        endAngle={size + 90}
      >
        {datas.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
