// Part 1
function computeLocation(step) {
    let posX = 0;
    let posY = 0;
    for ( let i = 0; i < step.length; i++ ) {
        const command = step[i].split(' ')[0];
        const amount = parseInt(step[i].split(' ')[1]);
        switch (command) {
            case 'forward':
                posX += amount;
                break;
            case 'down':
                posY += amount;
                break;
            case 'up':
                posY -= amount;
        }
    }
    return posX * posY;
}

// Get values from DOM and output result
$( document ).ready( function () {
    $( "#input-day2" ).on( "input", function () {
        const input = $( this ).val()
        const inputArray = input.split( "\n" )

        $( "#output-day2-1" ).text( computeLocation(inputArray) )

        $( "#output-day2-2" ).text(  )
    } )
} )