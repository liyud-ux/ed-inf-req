const api = require("api-ecoledirecte-france")
var fs = require('fs')
const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
})
readline.question('Input Username : ', name => {
readline.question('Input Password : ', password => {
api.accounts(name, password)
.then((account) => {
var accountjs = JSON.stringify(account)
console.log(accountjs)
})
})
})