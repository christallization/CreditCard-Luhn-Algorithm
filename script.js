function validateCards(bannedPrefixes, cardsToValidate) {
	var resultsArr = [];
	var isValidr = false;
	var isAllowedr = true;
	
	//Test for only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(cardsToValidate)) return false;
	
	//Split and loop through bannedPrefixes string
	var a = bannedPrefixes.split(", "), i;
	for (i = 0; i < a.length; i++) {
		//if ( cardsToValidate.startsWith(a[i]) === true ) { isAllowed == false; break; };
		if ( ( cardsToValidate.lastIndexOf(a[i], 0) === 0 ) == true ) { isAllowedr = false; break; };
	}

	// Luhn Algorithm
	var nCheck = 0, nDigit = 0, bEven = false;
	cardsToValidate = cardsToValidate.replace(/\D/g, "");
	
	for (var n = cardsToValidate.length - 1; n >= 0; n--) {
		var cDigit = cardsToValidate.charAt(n),
			  nDigit = parseInt(cDigit, 10);
		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}
		nCheck += nDigit;
		bEven = !bEven;
	}
	isValidr = (nCheck % 10) == 0;
	
	resultsArr.push({
        card: cardsToValidate,
        isValid: isValidr,
        isAllowed: isAllowedr
    });
	
	return resultsArr;
	
};

var bannedPrefixes = "11, 3434, 67453, 9";
var cardsToValidate = "6724843711060148";
//validateCards(bannedPrefixes, cardsToValidate);

var result = validateCards(bannedPrefixes, cardsToValidate);
JSON.stringify( result );
console.log(JSON.stringify( result ));
