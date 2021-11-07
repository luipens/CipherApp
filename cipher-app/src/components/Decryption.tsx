import { RouteComponentProps } from "react-router";
import CipherControls from "./CipherControls";
import PlaintextResult from "./CipherResult";
import InputControl from "./InputControl";
import vernamCipher from "./vernamCipher";
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

const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [generatedPlaintext, setGeneratedPlaintext] = useState<
    string | number
  >();
  const [error, setError] = useState<string>();
  const [cipher, setCipher] = useState<"caesarCipher" | "vernamCipher">(
    "caesarCipher"
  );

  const cipherInputRef = useRef<HTMLIonInputElement>(null);
  const keyInputRef = useRef<HTMLIonInputElement>(null);

  const generatePlaintext = () => {
    const enteredCipher = cipherInputRef.current!.value;
    const enteredKey = keyInputRef.current!.value;

    if (!enteredCipher || !enteredKey || +enteredKey <= 0) {
      setError("Please enter a valid (non-negative) key");
      return;
    }

    let output = "something";

    if(cipher == "caesarCipher"){
        //do something
        //output = caesarCipher(enteredCipher, enteredKey);
        output = "In caesarCipher file";
    }

    else if(cipher == "vernamCipher"){
        output = vernamCipher(enteredCipher, enteredKey);
    }

    setGeneratedPlaintext(output);
  };

  const resetInputs = () => {
    cipherInputRef.current!.value = "";
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
                  <IonLabel position="floating">Your Ciphertext</IonLabel>
                  <IonInput type="text" ref={cipherInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Key</IonLabel>
                  <IonInput type="number" ref={keyInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <CipherControls
              onGenerate={generatePlaintext}
              onReset={resetInputs}
            />
            {generatedPlaintext && (
              <PlaintextResult result={generatedPlaintext} />
            )}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default Tab2;
