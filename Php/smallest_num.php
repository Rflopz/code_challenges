<?php 

function solution ( $A ) {

    for ( $i = 1; $i <= max($A) + 1; $i++ ) {

        $result = array_filter( $A, function ($x) use ($i) { return $x == $i; } );

        if ( count( $result ) <= 0 )
            return $i;
    }

    return 1;

}

// echo solution([ 1,3,6,4,1,2 ]);
echo solution([ 2,4 ]);
// echo solution([ 1 ]);