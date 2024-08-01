let waterUsageData = [];
let energyConsumptionData = [];
let carbonFootprintData = [];
let days = [];

function trackWaterUsage() {
    const waterUsage = document.getElementById('water-usage').value;
    if (waterUsage && !isNaN(waterUsage) && waterUsage >= 0) {
        waterUsageData.push(Number(waterUsage));
        days.push(`Day ${days.length + 1}`);
        updateChart();
    } else {
        alert('Please enter a valid number for water usage.');
    }
}

function trackEnergyConsumption() {
    const energyConsumption = document.getElementById('energy-consumption').value;
    if (energyConsumption && !isNaN(energyConsumption) && energyConsumption >= 0) {
        energyConsumptionData.push(Number(energyConsumption));
        days.push(`Day ${days.length + 1}`);
        updateChart();
    } else {
        alert('Please enter a valid number for energy consumption.');
    }
}

function trackCarbonFootprint() {
    const carbonFootprint = document.getElementById('carbon-footprint').value;
    if (carbonFootprint && !isNaN(carbonFootprint) && carbonFootprint >= 0) {
        carbonFootprintData.push(Number(carbonFootprint));
        days.push(`Day ${days.length + 1}`);
        updateChart();
    } else {
        alert('Please enter a valid number for carbon footprint.');
    }
}

const ctx = document.getElementById('analysisChart').getContext('2d');
const analysisChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'Water Usage (liters)',
            data: waterUsageData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        },
        {
            label: 'Energy Consumption (kWh)',
            data: energyConsumptionData,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
        },
        {
            label: 'Carbon Footprint (kg CO2)',
            data: carbonFootprintData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount'
                }
            }
        }
    }
});

function updateChart() {
    analysisChart.update();
}

function openModal() {
    document.getElementById('detailsModal').style.display = 'block';
    updateDetailedChart();
}

function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

const detailedCtx = document.getElementById('detailedChart').getContext('2d');
let detailedChart = new Chart(detailedCtx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Water Usage (liters)',
            data: waterUsageData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Energy Consumption (kWh)',
            data: energyConsumptionData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        },
        {
            label: 'Carbon Footprint (kg CO2)',
            data: carbonFootprintData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount'
                }
            }
        }
    }
});

function updateDetailedChart() {
    detailedChart.update();
}
