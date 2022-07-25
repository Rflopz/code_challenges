<?php 

function duplicateCount($text) {
  
    // $text = strtolower($text);

    // $procesed = [];

    // foreach ( str_split($text) as $k => $char ) {

    //     if ( isset($procesed[$char]) ) {
    //         $procesed[$char] += 1;
    //         continue;
    //     }

    //     $procesed[$char] = 0;
    // }

    // $result = array_filter( $procesed, function ($item) {
    //     return $item !== 0;
    // });

    // return count( $result );

    // best practice 
    $stats = array_count_values(
        str_split( strtolower($text) )
    );

    return count( 
        array_filter($stats, function($item) { return $item > 1; })
    );

}


var_dump( 'expented 0, result => ' . duplicateCount("") );
var_dump( 'expented 0, result => ' . duplicateCount("abcde") );
var_dump( 'expented 2, result => ' . duplicateCount("aabbcde") );
var_dump( 'expented 2, result => ' . duplicateCount("aabBcde"));
var_dump( 'expented 1, result => ' . duplicateCount("Indivisibility") );
var_dump( 'expented 2, result => ' . duplicateCount("Indivisibilities") );