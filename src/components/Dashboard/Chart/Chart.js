import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);

  return (
    <div className="row mt-3">
      <div className="col-lg-6 ">
        <h1 className="text-center">Line Chart</h1>
        <div className="d-flex justify-content-center">
        <LineChart width={400} height={400} data={charts}>
        <Line dataKey={"sell"}></Line>
        <XAxis dataKey={"month"} />
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Tooltip></Tooltip>
      </LineChart>
        </div>
      </div>
      <div className="col-lg-6">
        <h1 className="text-center">Bar Chart</h1>

        <div className="d-flex justify-content-center">
        <BarChart width={400} height={400} data={charts}>
        <Bar dataKey={"revenue"} fill="#8884d8"></Bar>
        <XAxis dataKey={"investment"} />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
        </div>
      </div>
      <div>
      <h1 className='text-center'>Pie Chart</h1>

        <div className="d-flex justify-content-center">
        <PieChart width={400} height={400}>
          <Pie
            data={charts}
            dataKey={"sell"}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          />

          <Tooltip></Tooltip>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
