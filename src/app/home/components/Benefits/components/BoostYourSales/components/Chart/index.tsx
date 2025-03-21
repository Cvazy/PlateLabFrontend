"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { ISale, useFetchAllSalesQuery } from "@/app/home";
import { useEffect, useState } from "react";
import { CountUp } from "@/app/ReactBitsComponents";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
);

export const Chart = () => {
  const { data } = useFetchAllSalesQuery();

  const salesData: ISale[] = data || [];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const months = salesData.map((sale) => sale.month_display);
  const salesQuantities = salesData.map((sale) => sale.sales_qnt);

  const annotationElement = salesData.filter(
    ({ is_active_updating_the_photo_menu }) =>
      is_active_updating_the_photo_menu,
  );

  const annotationMonth = annotationElement[0]?.month_display;
  const annotationValue = annotationElement[0]?.sales_qnt;

  const annotationElementIndex = salesData.findIndex(
    ({ is_active_updating_the_photo_menu }) =>
      is_active_updating_the_photo_menu,
  );

  const beforeIsActiveSales = salesData
    .filter((_, index) => index <= annotationElementIndex)
    .reduce((acc, curr) => acc + curr.sales_qnt, 0);

  const afterIsActiveSales = salesData
    .filter((_, index) => index > annotationElementIndex)
    .reduce((acc, curr) => acc + curr.sales_qnt, 0);

  const percent = ((afterIsActiveSales / beforeIsActiveSales) * 100).toFixed(1);

  const dataArr = {
    labels: months,
    datasets: [
      {
        label: "Turnover",
        data: salesQuantities,
        borderColor: "white",
        fill: true,
        tension: 0,
        pointBackgroundColor: "white",
        pointRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2500,
      delay: 2000,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} USD`,
        },
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          point: {
            type: "point",
            xValue: annotationMonth,
            yValue: annotationValue,
            backgroundColor: "#F63737",
            borderColor: "#F63737",
            borderWidth: 2,
            radius: 6,
          },
          line: {
            type: "line",
            xMin: annotationMonth,
            xMax: annotationMonth,
            borderColor: "white",
            borderWidth: 1,
            borderDash: [4, 4],
          },
          text: {
            type: "label",
            xValue: annotationMonth,
            yValue: annotationValue,
            textAlign: "left",
            content: [
              "after updating the",
              "photo menu with a",
              "turnover of 3 months",
            ],
            color: "#A0A0A0",
            backgroundColor: "transparent",
            font: {
              size: 13,
              weight: "normal",
            },
            xAdjust: isMobile ? -10 : -80,
            yAdjust: isMobile ? -120 : -75,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            if (index === values.length - 1) {
              return `    ${this.getLabelForValue(+value)}`;
            }
            return this.getLabelForValue(+value);
          },
          padding: 0,
        },
      },
      y: {
        position: "right",
        grid: {
          color: "#292929",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 10000,
          callback: (value) => `${Number(value) / 1000}K`,
          align: "end",
        },
      },
    },
  };

  return (
    <div className={"flex flex-col gap-6 w-full h-full"}>
      <p
        className={
          "font-fancy text-right text-white !leading-[normal] text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px]"
        }
      >
        +
        <CountUp
          from={0.1}
          to={Number.isNaN(+percent) ? 0.1 : +percent}
          separator={","}
          direction={"up"}
          duration={1}
          isFormatted={false}
          className={
            "font-fancy text-right text-white !leading-[normal] text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px]"
          }
        />
        %
      </p>

      <div className={"w-full h-full"}>
        <Line data={dataArr} options={options} />
      </div>
    </div>
  );
};
