var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                { x: 71.5, y: 3678 },
            ],
            label: "China",
            borderColor: "#3e95cd",
            backgroundColor: "#3e95cd",
            borderWidth: 2,

        }, {
            data: [
                { x: 61.1, y: 2548 },
            ],
            label: "India",
            borderColor: "#3cba9f",
            backgroundColor: "#3cba9f",
            borderWidth: 2,

        }, {
            data: [
                { x: 77.1, y: 45986 },
            ],
            label: "US",
            borderColor: "#ffa500",
            backgroundColor: "#ffa500",
            borderWidth: 2,

        }, {
            data: [
                { x: 68.3, y: 5878 },
            ],
            label: "Indonesia",
            borderColor: "#80217f",
            backgroundColor: "#80217f",
            borderWidth: 2,

        }, {
            data: [
                { x: 71.9, y: 11461 },
            ],
            label: "Brazil",
            borderColor: "#8fd694",
            backgroundColor: "#8fd694",
            borderWidth: 2,

        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Comparing life expectancy and GDP per capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: "While the U.S. has the highest GDP per capita, among countries seen here India ranks the lowest on both measures."
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'GDP per capita'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Life expectancy'
                }
            }
        }
    }
});