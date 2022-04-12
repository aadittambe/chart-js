var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["America", "East Asia & Pacific", "Europe & Central Asia", "Middle East & North Africa", "South Asia", "Sub-Saharan Africa"],
        datasets: [{
            label: 'Region by GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#ff0800'
            ]
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Regions of the world by GDP per capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Adjusted for all factors, the European and Central Asian countries have the highest GDP per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});