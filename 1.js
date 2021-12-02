function processNumbers( arr ) {
    let increasedNumbersArray = []
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] < arr[i + 1] ) {
            increasedNumbersArray.push(arr[i])
        }
    }
    return increasedNumbersArray.length
}


$( document ).ready( function () {
    $( "#input-day1" ).on( "input", function () {
        const input = $( this ).val()
        const inputArray = input.split( "\n" ).map(Number)
        const increasedAmount = processNumbers( inputArray )
        $( "#output-day1" ).text( increasedAmount )
    } )
} )