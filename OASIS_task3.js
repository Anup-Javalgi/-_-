function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var convertedTemperature;
  
    if (unitSelect === "celsius") {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      document.getElementById("convertedTemperature").innerHTML = temperatureInput + " Celsius is " + convertedTemperature.toFixed(2) + " Fahrenheit.";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      document.getElementById("convertedTemperature").innerHTML = temperatureInput + " Fahrenheit is " + convertedTemperature.toFixed(2) + " Celsius.";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      document.getElementById("convertedTemperature").innerHTML = temperatureInput + " Kelvin is " + convertedTemperature.toFixed(2) + " Celsius.";
    }
  }
  