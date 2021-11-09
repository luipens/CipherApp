// Belay and Sohyun
// caesarCipher is an algorithm for performing encryption or decryption using Caesar Cipher
// This code able able to perform the encryption and decryption for the given String and Key value
const caesarCipher = (input: string, key: number) => {

    return input.replace(/([a-z])/g, 
        ($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 97) % 26 + 97)
        ).replace(/([A-Z])/g, 
        ($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 65) % 26 + 65));
}

export default caesarCipher;