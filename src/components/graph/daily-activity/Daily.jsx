import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import "../daily-activity/Daily.css";

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#05bfe0"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export default function Daily({ datas }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const datas = payload[0].payload;
      return (
        <div className="custom-tooltip-daily">
          <span>{datas.poids}kg</span>
          <span>{datas.calories * 4}kCal</span>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart
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
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" tickLine={false} />
        <YAxis dataKey="poids" orientation="right" tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="poids"
          fill="#282D30"
          minPointSize={5}
          barSize={12}
          radius={[20, 20, 0, 0]}
        >
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar
          dataKey="calories"
          fill="#E60000"
          minPointSize={10}
          barSize={12}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
