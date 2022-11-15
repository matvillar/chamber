const windSpeed = document.getElementById('windSpeed');
const windChillSpan = document.getElementById('windChill');
const temperature = document.getElementById('temp');

const windChillFactor = () => {
  const speedNum = parseFloat(windSpeed.innerHTML);
  const tempNum = parseFloat(temperature.innerHTML);

  if (tempNum <= 50 && speedNum >= 3) {
    const formula =
      35.74 +
      0.6215 * tempNum -
      35.75 * speedNum ** 0.16 +
      0.4275 * tempNum * speedNum ** 0.16;
    windChillSpan.innerHTML = formula.toFixed(1);
  } else {
    windChillSpan.innerHTML = 'N/A';
  }
};
windChillFactor();
