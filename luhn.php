function card_check($number) {
	settype($number, 'string');
	$sumTable = array(
		array(0,1,2,3,4,5,6,7,8,9),
		array(0,2,4,6,8,1,3,5,7,9));
	$sum = 0;
	$flip = 0;
	for ($i = strlen($number) - 1; $i >= 0; $i--) {
		$sum += $sumTable[$flip++ & 0x1][$number[$i]];
	}
	if ( $sum % 10 === 0 ){
		return "Valid";
	} else {
		return "In-valid";
	};
};

function card_check2($number) {
	$card_number_checksum = '';
    foreach (str_split(strrev((string) $number)) as $i => $d) {
        $card_number_checksum .= $i %2 !== 0 ? $d * 2 : $d;
    }
	if ( array_sum(str_split($card_number_checksum)) % 10 === 0 ){
		return "Valid";
	} else {
		return "In-valid";
	};
};

function card_check3($number) {
    if (empty($number))
        return false;

    $_j = 0;
    $_base = str_split($number);
    $_sum = array_pop($_base);
    while (($_actual = array_pop($_base)) !== null) {
        if ($_j % 2 == 0) {
            $_actual *= 2;
            if ($_actual > 9)
                $_actual -= 9;
        }
        $_j++;
        $_sum += $_actual;
    }
	if ( $_sum % 10 === 0 ){
		return "Valid";
	} else {
		return "In-valid";
	};
};
