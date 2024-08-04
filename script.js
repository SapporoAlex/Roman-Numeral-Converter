const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", convert)
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convert();
  }
});

function convertToRoman(number) {
  let convertedRomanNumerals = "";
/* 1000s M */
  const m = Math.floor(number / 1000);
  for (let i = 0; i < m; i++) {
    convertedRomanNumerals += "M";
  }
/* 100s C and D */
  const c = Math.floor((number / 100) % 10);
  if (c === 9) {
    convertedRomanNumerals += "CM";
  } else if (c === 4) {
    convertedRomanNumerals += "CD";
  } else if (c >= 5) {
    convertedRomanNumerals += "D";
    let extraC = c % 5
      for (let i = 0; i < extraC; i++)
    convertedRomanNumerals += "C";
  } else if (c <= 3) {
      for (let i = 0; i < c; i++)
    convertedRomanNumerals += "C";
  }

  /* 10s X and L */
  const x = Math.floor((number / 10) % 10);
  if (x === 9) {
    convertedRomanNumerals += "XC";
  } else if (x === 4) {
    convertedRomanNumerals += "XL";
  } else if (x >= 5) {
    convertedRomanNumerals += "L";
    let extraX = x % 5
      for (let i = 0; i < extraX; i++)
    convertedRomanNumerals += "X";
  } else if (x <= 3) {
      for (let i = 0; i < x; i++)
    convertedRomanNumerals += "X";
  }

    /* 1s I and V */
  const l = Math.floor(number / 1 % 10);
  if (l === 9) {
    convertedRomanNumerals += "IX";
  } else if (l === 4) {
    convertedRomanNumerals += "IV";
  } else if (l >= 5) {
    convertedRomanNumerals += "V";
    let extraL = l % 5
      for (let i = 0; i < extraL; i++)
    convertedRomanNumerals += "I";
  } else if (l <= 3) {
      for (let i = 0; i < l; i++)
    convertedRomanNumerals += "I";
  }

  console.log(convertedRomanNumerals);
  return convertedRomanNumerals;


}

function convert() {

const numberValue = number.value.trim();
const parsedNumberValue = parseInt(numberValue, 10);

  if (numberValue === "") {
  output.innerText = "Please enter a valid number";

} else if (parsedNumberValue < 0) {
  output.innerText = "Please enter a number greater than or equal to 1";

} else if (number.value.toLowerCase() === "hello") {
  output.innerText = "Greetings friend!";

} else if (number.value.toLowerCase() === "mario") {
  output.innerText = "It'sa me!";

} else if (number.value.toLowerCase() === "caesar") {
  output.innerText = "All hail!";

} else if (parsedNumberValue >= 4000) {
  output.innerText = "Please enter a number less than or equal to 3999";

} else {
  output.innerText = convertToRoman(parsedNumberValue);
}
}
