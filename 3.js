// Part 1
function computeGammaEpsilon(bits) {
  let epsilon = [];
  let gamma = [];

  let pos1 = [];
  let pos2 = [];
  let pos3 = [];
  let pos4 = [];
  let pos5 = [];
  let pos6 = [];
  let pos7 = [];
  let pos8 = [];
  let pos9 = [];
  let pos10 = [];
  let pos11 = [];
  let pos12 = [];

  for (bit in bits) {
    const rowArray = bits[bit].split("");
    for (number in rowArray) {
      eval(`pos${parseInt(number) + 1}`).push(rowArray[number]);
    }
  }

  for (i = 1; i <= 12; i++) {
    console.log(eval(`pos${i}`));
    const oneOccurences = eval(`pos${i}`).filter(
      (x) => parseInt(x) === 1
    ).length;
    const zeroOccurences = eval(`pos${i}`).filter(
      (x) => parseInt(x) === 0
    ).length;
    console.log(oneOccurences, zeroOccurences);
    gamma.push(oneOccurences > zeroOccurences ? "1" : "0");
    epsilon.push(oneOccurences < zeroOccurences ? "1" : "0");
  }

  const gammaEpsilon =
    parseInt(epsilon.join(""), 2) * parseInt(gamma.join(""), 2);

  console.log(epsilon.join(""), gamma.join(""));
  return gammaEpsilon;
}

// Get values from DOM and output result
$(document).ready(function () {
  $("#input-day3").on("input", function () {
    const input = $(this).val();
    const inputArray = input.split("\n");

    $("#output-day3-1").text(computeGammaEpsilon(inputArray));

    $("#output-day3-2").text(computeLocationAccurate(inputArray));
  });
});
