function factorial ( number ) {
    if ( number <= 1 )
        return number;

    return number * factorial( number - 1 );
}

for ( i = 1; i <= 50; i++ ) 
    console.log( `Factorial of (${i}) is: ${factorial( i )}` )