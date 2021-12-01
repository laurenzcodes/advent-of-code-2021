// api url
const api_url = 
      "https://adventofcode.com/2021/day/1/input";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    const data = await response.json();
    return data
}

function checkForIncreasedNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

checkForIncreasedNumbers(getapi(api_url))