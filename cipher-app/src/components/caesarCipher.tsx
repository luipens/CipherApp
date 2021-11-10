/* 
* Belay and Sohyun
* caesarCipher is an algorithm for performing encryption or decryption using Caesar Cipher
* This code able able to perform the encryption and decryption for the given String and Key value
*/
const caesarCipher = (plaintext: string, keyNum: number) => { 

    // This function will return the value (named plaintext) that is encrypted or is decrypted 
    // from the plaintext and the key number (keyNum) by the method of the Caesar Cipher.
    return plaintext.replace(/([a-z])/g, 

        /*  The first match will encrypted with the shifted alphabet,
            and this is also considered the ASCII code.
            String.fromCharCode(index) converts Unicode values from the input (index) to characters and returns it.
            e(x)=(x+k) (mod)26 Where k is the key (the shift) applied to each letter. After applying this function, 
            the result is a number which must then be translated back into a letter. The decryption function is : e(x)=(x-k) (mod)26.
        */
        ($1) => String.fromCharCode(($1.charCodeAt(0) + keyNum + 26 - 97) % 26 + 97)).replace(/([A-Z])/g, // Capital letter

        ($1) => String.fromCharCode(($1.charCodeAt(0) + keyNum + 26 - 65) % 26 + 65));
}

export default caesarCipher;