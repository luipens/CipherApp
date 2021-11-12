/* 
* Belay and Sohyun
* caesarCipher is an algorithm for performing encryption or decryption using Caesar Cipher
* This code able able to perform the encryption and decryption for the given String and Key value
*/
const caesarCipher = (text: string, keyNum: number) => { 
        /*  
        *   This function will return the value (named text) that is encrypted or is decrypted 
        *   from the plaintext and the key number (keyNum) by the method of the Caesar Cipher.
        *   The separated char of plaintext will encrypted with the shifted alphabet.
        *   String.fromCharCode(index) converts Unicode values from the input (index) to characters and returns it.
        *   e(x)=(x+k) (mod)26 Where k is the key (the shift) applied to each letter. After applying this function, 
        *   the result is a number which must then be translated back into a letter. 
        *   The decryption function is : e(x)=(x-k) (mod)26.
        */
    return text.replace(/([a-z])/g, 

        /*
        * The number 97 is subtracted before modulo and added after modulo to convert the character
        * as the ASCII code binary number (lower case alphabet 'a'). Also, number 104 (26*4) is added 
        * before subtracting 97 to prevent the calculation error.
        */
        (text) => String.fromCharCode((text.charCodeAt(0) + keyNum + 104 - 97) % 26 + 97)
        ).replace(/(^[A-Z])/g,

        /* 
        * The number 65 is subtracted before modulo and added after modulo to convert the character
        * as the ASCII code binary number (upper case alphabet 'A'). Also, number 78 (26*3) is added 
        * before subtracting 65 to prevent the calculation error.
        */
        (text) => String.fromCharCode((text.charCodeAt(0) + keyNum + 78 - 65) % 26 + 65));
}

export default caesarCipher;