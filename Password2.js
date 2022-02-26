const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Welcome please enter your password:", function(input){
	if (input <= 10) {
		console.log('Password must be 10 charaters long')
	}
	
	if (input > 10) {
		console.log('Password is saved')	
	}
	
	if (input === "password" || input === "Password" || input === "password12" || input === "password123") {
		console.log('password cant be password')
	}
	

    
	
	  
		reader.close()

});









