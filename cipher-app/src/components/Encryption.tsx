import { RouteComponentProps } from "react-router";
import CipherControls from "./CipherControls";
import CipherResult from "./CipherResult";
import InputControl from "./InputControl";
import vernamCipher from "./vernamCipher";
import caesarCipher from "./caesarCipher";
import React, { useRef, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonRow,
  IonGrid,
  IonApp,
  IonCol,
  IonInput,
  IonAlert,
} from "@ionic/react";

const Tab1: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [generatedCipher, setGeneratedCipher] = useState<string>();
  const [error, setError] = useState<string>();
  const [cipher, setCipher] = useState<"caesarCipher" | "vernamCipher">(
    "caesarCipher"
  );

  const plaintextInputRef = useRef<HTMLIonInputElement>(null);
  const keyInputRef = useRef<HTMLIonInputElement>(null);

  const generateCipher = () => {
    const enteredPlaintext = plaintextInputRef.current!.value;
    const enteredKey = keyInputRef.current!.value;

    //initial check for empty iuputs
    if (!enteredPlaintext || !enteredKey) {
      setError("Please enter a valid Plaintext and/or Key");
      return;
    }

    let cipherCheck = cipher;

    //check for specifics based on cipher
    if(cipherCheck === "caesarCipher"){
      
      let val = Number(enteredKey);
      //check if Key is numerical
      if(isNaN(val)){
        setError("Please enter a valid numeric Key");
        return;
      }

      //check for a negative key
      if(val <= 0){
        setError("Please enter a positive numeric Key greater than 0");
        return;
      }
    }

    if(cipherCheck === "vernamCipher"){
      
      let regex = /^[A-Za-z?,'!.]+$/
      let text = String(enteredPlaintext);
      let val = String(enteredKey);
      //check for non-alphabetic characters
      if((!regex.test(text)) || (!regex.test(val))){
        setError("Please enter a valid Plaintext and/or Key consisting of only alphabetic characters");
        return;
      }

      //check for same length as plaintext
      if(val.length != text.length){
        setError("Please enter a Plaintext and Key of the same length");
        return;
      }
    }

    let output = "something";
    let modelSel = 1; //true == encrypt

    if(cipher === "caesarCipher"){

      let key = Number(enteredKey);

      if((typeof enteredPlaintext === "string") && (!isNaN(key))) {
        output = caesarCipher(enteredPlaintext, key);
      }
    }

    else if(cipher === "vernamCipher"){

      let key = String(enteredKey);

      if((typeof enteredPlaintext === "string") && (typeof key !== "number")) {
        output = vernamCipher(enteredPlaintext, key, modelSel);
      }
    }

    setGeneratedCipher(output);
  };

  const resetInputs = () => {
    plaintextInputRef.current!.value = "";
    keyInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };

  const selectCipherHandler = (
    selectedCipher: "caesarCipher" | "vernamCipher"
  ) => {
    setCipher(selectedCipher);
  };
  
  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Cipher App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selectedCipher={cipher}
                  onSelectCipher={selectCipherHandler}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Plaintext</IonLabel>
                  <IonInput type="text" ref={plaintextInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Key</IonLabel>
                  <IonInput type="text" ref={keyInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <CipherControls onGenerate={generateCipher} onReset={resetInputs} />
            {generatedCipher && <CipherResult result={generatedCipher} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default Tab1;
