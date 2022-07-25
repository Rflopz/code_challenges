<?php 
function find_uniq($a) {
    // $count = count($a);
    // $length = $count < 1000 ? $count : intval( $count / 10 );
    // return process( $a, 0, $length, $a[0]);  

    // besto
    sort($a);
  
    return ($a[0] === $a[1]) ? end($a) : current($a);
}

function process ($a, $offset, $length, $diff) {
    
    $slice = array_slice( $a, $offset, $length);

    if ( count($slice) <= 0)
        return 0;
  
    $different["{$slice[0]}"] = 1;

    for ( $i = 1; $i < count($slice); $i++ ) {
        if ( ! isset( $different["{$slice[$i]}"] ) ) {
            $different["{$slice[$i]}"] = 1;
            continue;
        }
        $different["{$slice[$i]}"] ++;
    }  

    $result = array_filter( $different, function ($i) { return $i == 1; });

    if ( is_null( $result ) || count( $result ) <= 0 ) 
        return process( $a, $offset + $length - 1, $length, $diff );
  
    return array_keys($result)[0]; 

}

var_dump(0.6 . ' => ' . find_uniq([0.6, 0.4, 0.4, 0.4, 0.4]));
// var_dump(0.55 . ' => ' . find_uniq([0, 0, 0.55, 0, 0]));
// var_dump(1 . ' => ' . find_uniq([0, 1, 0]));