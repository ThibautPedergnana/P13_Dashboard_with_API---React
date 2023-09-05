import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Duration({ datas }) {
  const CustomTooltip = ({ active, payload, label }) => {
    const datas = payload[0];
    console.log(datas);
    return <div className="custom-tooltip">{`${datas?.value} mins`}</div>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          axisLine={false}
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          strokeWidth={1}
          dot={false}
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.5)"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
