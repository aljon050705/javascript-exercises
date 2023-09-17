const convertToCelsius = function(fahrenheitTemp) {
  return Math.floor(((fahrenheitTemp - 32) * 5/9)*10+0.5)/10;
};

const convertToFahrenheit = function(celciusTemp) {
  return Math.floor(((celciusTemp * 9/5) + 32)*10+0.5)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
