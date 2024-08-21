document.addEventListener('DOMContentLoaded', function () {
    const ctxSales = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctxSales, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Monthly Sales',
                data: [120, 150, 180, 200, 170, 190, 220],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to resize based on container
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxProducts = document.getElementById('productsChart').getContext('2d');
    const productsChart = new Chart(ctxProducts, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                label: 'Product Distribution',
                data: [300, 150, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to resize based on container
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    });
});
