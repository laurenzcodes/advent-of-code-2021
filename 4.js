// Part 1

function checkRowHorizontal(numbers, rowNumbers) {
  console.log(rowNumbers);
  const rowLength = rowNumbers[0].length;
  let matchCount = 0;
  for (number in numbers) {
    if (matchCount === rowLength) {
      return true;
    }
    if (rowNumbers.some((rowNumber) => rowNumber.includes(numbers[number]))) {
      matchCount++;
    }
  }
}

function computeBingoWinner(numbers, bingos) {
  console.log(numbers);
  for (bingo in bingos) {
    const bingoRows = bingos[bingo].split("\n");
    const rowNumbers = bingoRows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((number) => parseInt(number))
    );
    const hasHorizontalBingo = checkRowHorizontal(numbers, rowNumbers);
    console.log(hasHorizontalBingo);
  }
}

// Part 2

// Get values from DOM and output result
$(document).ready(function () {
  $("#input-day4").on("input", function () {
    const input = $(this).val();
    const numbers = input.split("\n")[0].split(",").map(Number);
    const bingos = input.substr(input.indexOf("\n")).trim().split("\n\n");
    console.log(bingos);

    $("#output-day4-1").text(computeBingoWinner(numbers, bingos));

    // $("#output-day4-2").html(computeRatings(inputArray));
  });
});
