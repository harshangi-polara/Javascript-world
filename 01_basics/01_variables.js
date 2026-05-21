const accountId = 576677;
let accountEmail = "hrp@hrp.com";
var accountPassword = "hh88788";
accountCity = "delhi";    //allowed but not recommended 
 
// accountId = 8787878;  //not allowed in const

accountEmail = "nrp@nrp.com";
accountPassword = "8878bbb";
accountCity = "Bombay";

/*  prefer not to use var 
because of block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
