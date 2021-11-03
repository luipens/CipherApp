/*
This doesn't work yet
Also user input needs to be added
*/

//cipher map reference
const cipherMap = () => {
    let keymap : {[key: string]: number;} = {};
    let chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    chars.split("").forEach((element, index) => { keymap[element] = index; });
    return keymap
  };//chipherMap
  
  //loop up function
  const getKeyByValue = (object: {[key:string] : any}, value: any) => { 
      return Object.keys(object).find(key => object[key] === value); 
  }//getKeyByValue
  
  const MAP = cipherMap();
  
  const userKey = {} ; //from user input
  const cipherKey = {} ; //from user input
  const enteredText = {} ; //user input, this is whatever the user gives
  const select = {} ; //user input again, true/false
  
  /*
  If a userKey does not already exist, generate a userkey.
  Otherwise, cipherKeys = the userKey stored into a map (has key and value pairs).
  The userKey string is then returned as a decimal int.
  
  Then set the user input text into all uppercase and split by letter.
  If the user wants to encrypt
      for each letter, call the loopup function.  
  If the user wants to decrypt
    blahblah fill in later
  Return result
  */
  const vernamCipher = () => {
      let result: string = "";
      let cipherKeys: number[];
  
      if(userKey.length === 0 || userKey === ""){
          //generate cipher** needs to be added
      }//if
      else{
          cipherKeys = userKey.split(" ").map((item) =>{
              return parseInt(item, 10);
          });
      }//else
  
      //set of characters that make up the enteredText
      const enteredTextSet = enteredText.toUpperCase().split("");
  
      //If select = true, encrypt.  False = decrypt
      if(select){
          //encryption loop
          enteredTextSet.forEach((item, index) =>{
              const val = getKeyByValue(MAP, (MAP[item] + cipherKeys[index]) % 26);
              result += item !== enteredText[index] ? val?.toLowerCase() : val;
          });
      }//if
      else{
          //decryption loop
          enteredTextSet.forEach((item, index) =>{
              const temp = (MAP[item] - cipherKeys[index]) % 26;
              const target = temp < 0 ? temp + 26 : temp;
              const val = getKeyByValue(MAP, target);
              result += item !== enteredText[index] ? val?.toLowerCase() : val;
          });
      }//else
  
      return result;
  
    };
    