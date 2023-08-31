import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#ff0101"];

export default function Score({ datas, size }) {
  console.log(size);
  console.log("start", 90);
  console.log("end", size + 90);
  return (
    <PieChart width={220} height={220}>
      <Pie
        data={datas}
        cx={110}
        cy={110}
        innerRadius={80}
        outerRadius={100}
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
