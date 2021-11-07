import React, { useRef, useState } from "react";

//Testing
/*
const vernamCipher = (plaintext: string | number, key: string | number) => {
    let blank = "In vernam cipher file";
    let cipher = plaintext;
    let keyChange = key;

    return blank;
}
*/

//cipher map reference, letters are the key, number is the value
const cipherMap = () => {
    let keymap : {[key: string]: number;} = {};
    let chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    chars.split("").forEach((element, index) => { keymap[element] = index; });
    return keymap
};//chipherMap
  
//loop up function, take the number and return the letter.
const lookup = (object: {[key:string] : any}, value: any) => {
    return Object.keys(object).find(key => object[key] === value); 
};//lookup
  
/*
If a userKey does not already exist, generate a userkey the same length as the entered text.
Otherwise, cipherKeys = the userKey stored as their index values
  
Then set the user input text into all uppercase and split by letter.
If the user wants to encrypt
    for each letter
        look up the (refMap[letter] + number[index] % 26) <- that's a number
        call lookup to find the key of the number in the map
        add the returned letter to the result string.
If the user wants to decrypt
    for each letter
        find the original index
        take the original index, lookup the corresponding letter
        add returned letter to result string
Return result string
*/
const vernamCipher = (plaintext: string, userKey: string, modeSel: number) => {
    const refMap = cipherMap();
    let result: string = "";
    let cipherKeys: number[];
  
    if(userKey.length === 0 || userKey === ""){
        cipherKeys = Array.from({ length: plaintext.length }, () => Math.floor(Math.random() * 2000));
    }//if
    else{
        cipherKeys = userKey.split(" ").map((item) => {
            return parseInt(item, 10);
        });
    }//else
  
    //set of characters that make up the plaintext
    let userText = plaintext.toUpperCase().split("");
  
    //If modeSel = true (1), encrypt.  False (0) = decrypt
    if(modeSel == 1){
        //encryption loop
        userText.forEach((item: string, index: number) =>{
            const val = lookup(refMap, (refMap[item] + cipherKeys[index]) % 26);
            result += item !== userText[index] ? val?.toLowerCase() : val;
        });
    }//if
    else if(modeSel == 0){
        //decryption loop
        userText.forEach((item: string, index: number) =>{
            let temp = (refMap[item] - cipherKeys[index]) % 26;
                if(temp < 0){
                    temp = temp + 26;
                }//if

            const target = temp;
            const val = lookup(refMap, target);
            result += item !== userText[index] ? val?.toLowerCase() : val;
        });
    }//else if
    else{
        result = "Error: Illegal request passed to Vernam Cipher";
    }//else, error handling
  
    return result;
  
};//vernamCipher

export default vernamCipher;
    