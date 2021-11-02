// Belay and Eva
// Cipher is an algorithm for performing encryption or decryption
//This code able able to perform the encryption and decryption for the given String
function replace(input: string, key: number) : string {

    return input.replace(/([a-z])/g, 
        ($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 97) % 26 + 97)
        ).replace(/([A-Z])/g, 
        ($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 65) % 26 + 65));
}
 
//test
//us= input("Enter name: ")
//The problem we face is, how we can promt the user to add input in typescript, and also the output

var str = 'Hey Belay and Eva,';
//Operations
var encoded = replace(str, 3);
var decoded = replace(encoded, -3);
//print
console.log('Enciphered: ' + encoded);
console.log('Deciphered: ' + decoded);