// ------------- Chart.js implementation ----------------
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Juy",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Events",
          data: [660, 910, 790, 400, 1050, 580, 900, 300, 900, 620, 940, 780],
          backgroundColor: [
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
            "#8576FF",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
