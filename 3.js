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

  // Loop through rows and push each bit into position array depending on position in row
  for (bit in bits) {
    const rowArray = bits[bit].split("");
    for (number in rowArray) {
      eval(`pos${parseInt(number) + 1}`).push(rowArray[number]);
    }
  }

  // Loop through 12 positions and filter by occurence
  // to push into epsilon and gamma arrays depending on frequency
  for (i = 1; i <= 12; i++) {
    const oneOccurences = eval(`pos${i}`).filter(
      (x) => parseInt(x) === 1
    ).length;
    const zeroOccurences = eval(`pos${i}`).filter(
      (x) => parseInt(x) === 0
    ).length;

    gamma.push(oneOccurences > zeroOccurences ? "1" : "0");
    epsilon.push(oneOccurences < zeroOccurences ? "1" : "0");
  }
  // Convert binary to decimal
  const gammaEpsilon =
    parseInt(epsilon.join(""), 2) * parseInt(gamma.join(""), 2);

  return gammaEpsilon;
}

// Part 2
function computeRatings(bits) {
  const rowLength = bits[0].toString().length;
  let oxygenRatings = bits;
  let scrubberRatings = bits;

  // Compute oxygen rating
  for (i = 0; i <= rowLength; i++) {
    let ones = 0;
    let zeros = 0;

    // Count zero and one occurences at each position
    for (row in oxygenRatings) {
      const hasOne = oxygenRatings[row].charAt(i) === "1";
      const hasZero = oxygenRatings[row].charAt(i) === "0";
      if (hasOne) {
        ones++;
      } else if (hasZero) {
        zeros++;
      }
    }

    // Filter oxygen rating array depending on frequency
    if (oxygenRatings.length > 1) {
      if (ones > zeros || ones === zeros) {
        oxygenRatings = oxygenRatings.filter((row) => row.charAt(i) === "1");
      } else if (ones < zeros) {
        oxygenRatings = oxygenRatings.filter((row) => row.charAt(i) === "0");
      }
    }
  }

  // Compute scrubber rating
  for (i = 0; i <= rowLength; i++) {
    let ones = 0;
    let zeros = 0;
    for (row in scrubberRatings) {
      const hasOne = scrubberRatings[row].charAt(i) === "1";
      const hasZero = scrubberRatings[row].charAt(i) === "0";
      if (hasOne) {
        ones++;
      } else if (hasZero) {
        zeros++;
      }
    }
    if (scrubberRatings.length > 1) {
      if (ones > zeros || ones === zeros) {
        scrubberRatings = scrubberRatings.filter(
          (row) => row.charAt(i) === "0"
        );
      } else if (ones < zeros) {
        scrubberRatings = scrubberRatings.filter(
          (row) => row.charAt(i) === "1"
        );
      }
    }
  }

  return (
    "oxygenRatings: " +
    parseInt(oxygenRatings[0], 2) +
    "<br />" +
    "scrubberRatings: " +
    parseInt(scrubberRatings[0], 2) +
    "<br />" +
    "life support rating: " +
    parseInt(oxygenRatings[0], 2) * parseInt(scrubberRatings[0], 2)
  );
}

// Get values from DOM and output result
$(document).ready(function () {
  $("#input-day3").on("input", function () {
    const input = $(this).val();
    const inputArray = input.split("\n");

    $("#output-day3-1").text(computeGammaEpsilon(inputArray));

    $("#output-day3-2").html(computeRatings(inputArray));
  });
});
