<?php 

function alphabet_position(string $s): string {

    preg_match_all( '/[a-zA-Z]/', $s, $alphabet );
    $positions = [];

    foreach($alphabet[0] as $k => $char) {
        $charcode = ord(strtoupper($char));
        $positions[] = ($charcode > 64 && $charcode < 91) ? $charcode - ord('A') + 1 : $charcode;
    }

    return join(' ', $positions);
}

// var_dump('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11', alphabet_position('The sunset sets at twelve o\' clock.'));
$expected = '22 9 15 10 5 15 5 20 16 21 18 3 1 20 11 12 9 1 12 9 10 3 5 22 22 17 4 11 15 16 13 2 18 3 26 21 5 7 5 20 26 8 17 21 7 12 12 25 23 12 25 7 5 21 9 17 9 10 7 10 13 8 9 5 18 25 5 17 12 11 7 21 6 16 2 13 22 7 14 24 7 20 25 16 16 8 20 1 7 25 13 22 2 26 23 20 13 22 1 1 26 1 6 26 15 11 7 1 5 13 9 18 18 2 10 13 26 24 26 1 26 13 17 26 8 22 11 12 13 8 11 20 3 9 5 7 10 2 18 15 15 8 19 3 5 20 12 21 8 20 9 7 4 18 2 13 4 7 3 11 3 10 18 17 25 2 22 14 10 19 13 17 25 21 20 22 16 5 21 2 7 22 16 8 18 24 22 23 7 22 24 19 11 25 20 12 9 8 7 19 9 17 11 3 21 15 15 24 11 3 17 2 26 8 13 26 18 21 9 6 19 8 10 25 11 20 20 7 26 12 21 14 17 4 6 15 21 6 6 10 2 12 26 19 13 9 11 14 6 21 10 15 18 26 24 16 13 12 2 4 21 14 23 15 13 26 17 1 17 24 2 25 24 12 6 8 13 5 9 4 21 3 15 13 1 24 17 9 18 24 3 21 13 11 14 9 7 22 8 17 1 3 8 16 24 15 7 22 25 14 8 4 24 5 21 26 14 24 23 2 18 5 15 13 25 5 19 9 8 1 7 9 16 11 23 14 17 21 17 8 7 16 23 8 3 1 21 6 7 23 23 2 21 1 10 16 20 15 9 11 9 12 10 10 24 22 23 10 18 6 9 2 25 3 1 5 26 1 9 9 5 3 3 18 6 6 15 7 20 15 7 21 7 25 9 24 22 5 10 16 10 2 20 18 7 18 3 2 7 19 18 18 21 13 8 2 25 2 19 12 24 26 20 13 5 12 3 16 16 16 23 8 14 12 17 8 25 15 10 13 7 22 7 4 8 23 11 9 8 23 13 25 24 14 11 14 7 12 8 3 6 3 17 22 7 14 10 7 2 23 21 18 24 3 20 10 7 19 21';
$result = alphabet_position('vi 81o%jeoE5)tpuRc??aT?klI4a3Li?JceV vqd&3KOp*MbRCZuEg-ETz@,h^qu%G^l2lyWl&y7GE7,uI#?85qIJgJ0MHiE6RYe$qlKG+.%u5f@p,B6MVgNx@^GTyppH&T.*aG%3ymvBzwtm%Vaaz0a,.FZo^&KG0A9EmI2Rrb2JmZ?xzaZmQ z8h6V 5K^3LM7hK@Tc51ie.Gj0brOOH*Sc)08EtLUhtiGD8rBm&DgC2!kC2Jrq91YbVnJSMqY$Ut4vp5E1)ubgV0p@H%?rxVwGV0xSky@tli#Hg0-.S2iQkCU&ooXkCq4bZHmZR(Ui4fsH3$JyKttgZlu@(nQd,.f@3OUFfJblZsmiK1N07%F@9@UJ7O8R52 zxPM-lbDUn% w,2O1mZ6Q5AqX&bYXlfh 6+m5 &7eIduc+Omax%q*$i4R&#XCu$MkN1*IgvHQaCH7pxO)gv)-!yN#H2dX2euZ5NXWB REOM&YeSihAGiP?kWNQ5U?qHGPwh.c-4A-U+-(FG*wwbU*a4Jp%-To&-iKiL5jjX@(6vw-jrfIByCAe-zAIie@CcrFFO49gt!ogU@gYIxv+EjPjBTrgRcBg#4sR$rUMhbY5@*BS2lx,+ZtM*elc)pPP$^whNL.qHyo(Jmg5VGd*HwkIhwm$#y75X NKnGlhC9Fc*Qv&(gn3J?)+(*gB&1*@w&uRxctJg8Su');
var_dump( 'result => ' . ($expected == $result) );
var_dump($expected);
var_dump($result);