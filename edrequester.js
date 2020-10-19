const api = require("api-ecoledirecte-france")
var fs = require('fs')
const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
})
//Asks for EcoleDirecte Username and password
readline.question('Input Username : ', name => {
readline.question('Input Password : ', password => {
api.accounts(name, password)
.then((account) => {
//Transforms the JSON into a big pile of strings
var accountjs = JSON.stringify(account)
//Logs the big pile of strings and informations
console.log(accountjs)
})
})
})
