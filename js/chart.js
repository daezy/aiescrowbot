let chart = document.getElementById("myChart").getContext("2d");
// chart.canvas.parentNode.style.width = "458px";

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
  labels: [
    "50% Presale and Pool Lp",
    "10% Team",
    "8% Marketing",
    "7% Development",
    "15% CEXs",
    "10% Treasury",
  ],
  datasets: [
    {
      label: "",
      data: [50, 10, 8, 7, 15, 10],
      backgroundColor: [
        "#124E70",
        "#53ACFF",
        "#15BFFD",
        "#07455c",
        "#67b1cc",
        "#007099",
      ],
      hoverOffset: 4,
    },
  ],
};

let donutChart = new Chart(chart, {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Tokenomics",
      },
    },
  },
});
