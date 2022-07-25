<?php 

function binaryArrayToNumber($arr) {
    return bindec( join('', $arr) );
}


var_dump(1 . '=>' . binaryArrayToNumber([0,0,0,1]));
var_dump(2 . '=>' . binaryArrayToNumber([0,0,1,0]));
var_dump(15 . '=>' . binaryArrayToNumber([1,1,1,1]));
var_dump(6 . '=>' . binaryArrayToNumber([0,1,1,0]));