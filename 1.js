// Part 1
function processNumbers( arr ) {
    let increasedNumbersArray = []
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] < arr[i + 1] ) {
            increasedNumbersArray.push(arr[i])
        }
    }
    return increasedNumbersArray.length
}

// Part 2
function processSlidingWindow( arr ) {
    let increasedWindowsArray = []
    for ( let i = 0; i < arr.length; i++ ) {
        const prev = arr[i - 1]
        const current = arr[i]
        const next = arr[i + 1]
        const previousWindow = prev + current + next 
        const currentWindow = current + next + arr[i + 2]

        if ( previousWindow < currentWindow ) {
            increasedWindowsArray.push(currentWindow)
        }

    }
    return increasedWindowsArray.length
}

// Get values from DOM and output result
$( document ).ready( function () {
    $( "#input-day1" ).on( "input", function () {
        const input = $( this ).val()
        const inputArray = input.split( "\n" ).map(Number)
        const increasedAmount = processNumbers( inputArray )
        $( "#output-day1-1" ).text( increasedAmount )

        const increasedWindows = processSlidingWindow( inputArray )
        $( "#output-day1-2" ).text( increasedWindows )
    } )
} )