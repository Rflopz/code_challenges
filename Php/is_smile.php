<?php

function count_smileys($arr): int {

    // if (count($arr) <= 0)
    //     return 0;

    // $validEyes = [ ':', ';' ];
    // $validNose = [ '-', '~' ];
    // $validSmile = [ ')', 'D' ];

    // $happyFaces = 0;

    // foreach($arr as $k => $face) {
    //     $parts = str_split($face);
    //     $count = count($parts);

    //     if ($count > 3)
    //         continue;

    //     if ( ! in_array( $parts[0], $validEyes ) ) 
    //         continue;

    //     if ( $count > 2 )
    //         if ( ! in_array( $parts[1], $validNose ) )
    //             continue;

    //     if ( ! in_array( $parts[ count($parts) - 1 ], $validSmile ) )
    //         continue;

    //     $happyFaces ++;
    // }

    // return $happyFaces;

    // best practice
    return preg_match_all("/[:;][-~]?[\)D]/", implode(",", $arr));
}

var_dump( 'expected ' . 0 . ' => ' . count_smileys([]));
var_dump( 'expected ' . 4 . ' => ' . count_smileys([':D',':~)',';~D',':)']));
var_dump( 'expected ' . 2 . ' => ' . count_smileys([':)',':(',':D',':O',':;']));
var_dump( 'expected ' . 1 . ' => ' . count_smileys([';]', ':[', ';~~)', ':$', ';-D']));