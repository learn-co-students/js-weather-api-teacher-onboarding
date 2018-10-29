getFahrenheit = result =>
  result.map(dataPoint => dataPoint.temperature)

getHour = result =>
  result.map(dataPoint => new Date(dataPoint.time * 1000).getHours())

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

makeRequest = (endpoint, canvas) => {

  return fetch(endpoint)
    .then(resp => resp.json())
    .then(data => {
      const hourlyData = data.hourly.data
      const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
  })
}


