import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function Intensity({ datas }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius={80} data={datas}>
        <PolarGrid stroke="rgba(255, 255, 255, 1)" />
        <PolarAngleAxis
          dataKey="subject"
          stroke="rgba(255, 255, 255, 1)"
          tickLine={false}
          cx={30}
          cy={50}
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
          axisLine={false}
          tickLine={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
