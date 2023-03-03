import { useState, useEffect } from "react";
import ApexCharts from "apexcharts";

import Chart from "react-apexcharts";

const HistoricChart = ({}) => {
  const weeklyCurrency = [5.6, 5.28, 5.23, 5.42, 5.56, 5.47, 5.55];
  const [series, setSeries] = useState([
    {
      name: "currency",
      data: weeklyCurrency,
    },
  ]);
  const [options] = useState({
    chart: {
      type: "area",
      width: "100%",
      sparkline: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    colors: ["#7C3AED", "#32CCBC"],
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      show: true,
      width: 2,
      colors: ["#7C3AED"],
    },
    xaxis: {
      categories: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabádo",
      ],
      colors: ["#363447"],
      crosshairs: {
        show: true,
        width: 2,
        position: "back",
        opacity: 0.9,
        stroke: {
          color: "#32CCBC",
          width: 0,
          dashArray: 0,
        },
      },
      labels: {
        show: true,
        style: {
          colors: ["#0F172A"],
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      enabled: true,
      labels: {
        show: true,
        style: {
          colors: ["#334155"],
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
      },
    },
  });

  useEffect(() => {
    setSeries([
      {
        name: "$",
        data: weeklyCurrency.weeklyCurrency,
      },
    ]);
  }, []);

  return (
    <div className="chart">
      <Chart options={options} series={series} type="area" height="350" />
    </div>
  );
};

export default HistoricChart;
