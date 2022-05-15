const btnEnter = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const value = document.querySelector(".value");
const inputValue = document.querySelector(".input-value");
const meter = document.querySelector(".meter");
const feet = document.querySelector(".feet");
const feets = document.querySelector(".feets");
const meters = document.querySelector(".meters");
const litre = document.querySelector(".litre");
const gallon = document.querySelector(".gallon");
const gallons = document.querySelector(".gallons");
const litres = document.querySelector(".litres");
const mass = document.querySelector(".mass");
const pounds = document.querySelector(".pounds");
const pound = document.querySelector(".pound");
const kilo = document.querySelector(".kilo");
const output = document.querySelector(".output");
const clear = document.querySelector(".clear");

btnEnter.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

inputValue.addEventListener("change", (e) => {
  let newValue = parseInt(e.target.value);
  modal.classList.remove("show-modal");
  const feetCalc = calc(3.2808399);
  const meterCalc = calc(0.3048);
  const litreCalc = calc(3.78541178);
  const gallonCalc = calc(0.264172052);
  const kiloCalc = calc(0.45359237);
  const poundsCalc = calc(2.20462262);

  function calc(value) {
    return parseFloat((newValue * value).toFixed(2));
  }

  value.innerHTML = newValue;
  meter.innerHTML = newValue;
  feets.innerHTML = newValue;
  litre.innerHTML = newValue;
  gallons.innerHTML = newValue;
  mass.innerHTML = newValue;
  pounds.innerHTML = newValue;

  feet.innerHTML = feetCalc;
  meters.innerHTML = meterCalc;
  gallon.innerHTML = gallonCalc;
  litres.innerHTML = litreCalc;
  pound.innerHTML = poundsCalc;
  kilo.innerHTML = kiloCalc;

  output.style.display = "block";
});

clear.addEventListener("click", () => {
  output.style.display = "none";
  value.innerHTML = 0;
});
