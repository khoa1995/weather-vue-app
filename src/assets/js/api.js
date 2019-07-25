const API_URL = 'https://api.darksky.net/forecast/621beee48cc0e24bd166b72056cfa53c/37.8267,-122.4233'

function getAPI() {
  fetch(API_URL).then(response => response.json()).then(result => console.log(result))
}

export default {
  getAPI
}