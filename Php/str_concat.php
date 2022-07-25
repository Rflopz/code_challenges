<?php 
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function compare ( $str, $items ) {

    preg_match_all( '/(.)\1+/', $str, $matches );

    $result = array_combine($matches[0], array_map('strlen', $matches[0]));


    if ( count($result ) > 0)
        return false;

    $concatenate = array_filter( $items, 
        function ($item) use ($str) {
            return ! strpbrk( $item, $str );
        }
    );

    if ( count( $concatenate ) <= 0 )
        return $str;

    foreach ( $concatenate as $k => $concate ) {

        return compare( $str . $concate, $concatenate );
    }

}


function solution($A) {
    // write your code in PHP7.0

    // string result 
    // S is a concatenation of some of the strings from A
    // * every letter in S is different 
    $S = '';

    foreach( $A as $k => $str ) {     

        

        $result = compare( $str, $A );
        if ( $result == false )
            return 0;

        if ( strlen( $S ) < strlen( $result ) )
            $S = $result;
    }

    return strlen($S);
    
}

echo '\r\n'. solution(['co', 'dil', 'ity']);
echo '\r\n'. solution(['abc', 'yyy', 'def', 'csv']);
echo '\r\n'. solution(['potato', 'kayak', 'banana', 'racecar']);
echo '\r\n'. solution(['eva', 'jqw', 'tyn', 'jan']);