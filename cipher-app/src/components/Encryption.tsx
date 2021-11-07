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

    if (!enteredPlaintext || !enteredKey || +enteredKey <= 0) {
      setError("Please enter a valid (non-negative) key");
      return;
    }

    let output = "something";
    let modelSel = 1; //true == encrypt
    let text = enteredPlaintext.toString();
    let key = enteredKey.toString;

    if(cipher == "caesarCipher"){
        //do something
        //output = caesarCipher(text, enteredKey);
        output = "In caesarCipher file";
    }

    else if(cipher == "vernamCipher"){
        //output = vernamCipher(text, key, modelSel);
        output = "In vernamCipher file";
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
