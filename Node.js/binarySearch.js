function search ( numToSearch, arrayToSearch, startIndex = null, endIndex = null, isSorted = false ) {

    if   ( ! isSorted ) {
          arrayToSearch = arrayToSearch.sort( (a, b) => a - b );
          console.table( arrayToSearch )
      } 

    if ( startIndex === null ) 
        startIndex = 0;

    if ( endIndex === null )
        endIndex = arrayToSearch.length;

    let centerIndex = Math.floor( ( endIndex + startIndex ) / 2 );

    let centerValue = arrayToSearch[ centerIndex ];

    if ( numToSearch > arrayToSearch.length )
        return -1;

    if ( centerValue == numToSearch )
        return centerIndex; 

    if ( centerValue > numToSearch )
        return search( numToSearch, arrayToSearch, 0, centerIndex, true )
    else 
        return search( numToSearch, arrayToSearch, centerIndex, arrayToSearch.length, true )

}

let nums = [ 1, 5, 4, 3, 2, 6, 7, 8 ];

console.log( `Searching for: 9, Result: ${ search( 9, nums ) }`)
console.log( `Searching for: 2, Result: ${ search( 2, nums ) }`)
console.log( `Searching for: 6, Result: ${ search( 6, nums ) }`)
