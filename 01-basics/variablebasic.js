const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2  not allowed
accountEmail = "bbc@gmail.com"
accountPassword = "5ty"
accountCity = "blr"
/*
prefer not to use the var
because of issue in block and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

