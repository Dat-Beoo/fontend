function check_val(input) {
	// body...
	if (input.value =='') {
		input.style.border = '1px solid red';
		input.style.backgroundImage = "url('../img/icon-error.png')";
	}else{
		input.style.border = 'none';
		input.style.backgroundImage = 'none';
	}
}