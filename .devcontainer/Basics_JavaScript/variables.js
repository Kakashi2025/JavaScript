const accountId = 12378;

let accountEmail = "harshitsinghrawat15@gmail.com"

var password = "Har@123"

accountCity = "Bangalore"


//accountId = 2  will throw error as it is not allowed to change the value of a constant

accountEmail = "harry@gmail.com"
password = "1232123"

let accountState;
accountCity = "Ludhiana"
console.log(accountId);

console.table([accountId, accountEmail, accountCity, password, accountState])

/* always use let instead of var because of issue in blocked scope and functional scope */


