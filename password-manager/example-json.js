var person = {
    name: 'awdesh',
    age: 28
}

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObj = JSON.parse(personJSON);

console.log(personObj);
console.log(typeof personObj);


var animal = '{"name": "Halley"}';
var animalObj = JSON.parse(animal);

console.log(animalObj);
animalObj.age = 5;

var animalJSON = JSON.stringify(animalObj);
console.log(animalJSON);

var crypto = require('crypto-js');
var secretMessage = {
    name: 'Awdesh',
    secretName: '007'
};

// stringify converts JS object to JSON.
var stringJSON = JSON.stringify(secretMessage);
console.log(stringJSON);

var secretKey = '123abc';
// both encrypt and decrypt message takes string as first argument,
var encryptedMessage = crypto.AES.encrypt(stringJSON, secretKey);
console.log('Encrypted Message-:' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted message-:' + decryptedMessage);
console.log('Name is-:' + decryptedMessage.name);
console.log('SecretName is-:' + decryptedMessage.secretName);