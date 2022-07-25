<?php 

// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";
function getMaxValue( $n, $pos = 0, $result = 0 ) {

    // find the 5 index position
    $i = strpos( $n, '5', $pos );

    var_dump( $i );

    if ( $i == false )
        return $result;

    // from the find pos to the end of string
    $l = $i - strlen( $n );

    $_result = substr_replace( $n, '', $l, 1 );

    if ( $_result > $result )
        $result = $_result;

    return getMaxValue( $n, $i + 1, $result );


}

function solution($N) {
    // write your code in PHP7.0

    

    return getMaxValue( $N );



}


echo 's ' . solution(-5859);
