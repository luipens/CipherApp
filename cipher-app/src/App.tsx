import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  IonAlert,
} from "@ionic/react";

import CipherControls from "./components/CipherControls";
import CipherResult from "./components/CipherResult";
import InputControl from "./components/InputControl";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const [generatedCipher, setGeneratedCipher] = useState<string | number>();
  const [error, setError] = useState<string>();

  const plaintextInputRef = useRef<HTMLIonInputElement>(null);
  const keyInputRef = useRef<HTMLIonInputElement>(null);

  const generateCipher = () => {
    const enteredPlaintext = plaintextInputRef.current!.value;
    const enteredKey = keyInputRef.current!.value;

    if (!enteredPlaintext || !enteredKey || +enteredKey <= 0) {
      setError("Please enter a valid (non-negative) key");
      return;
    }

    const cipher = enteredPlaintext;

    setGeneratedCipher(cipher);
  };

  const resetInputs = () => {
    plaintextInputRef.current!.value = "";
    keyInputRef.current!.value = "";
  };

  const clearError = () => {
    setError('');
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
            <IonTitle>Cipher Generator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl />
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
                  <IonInput type="number" ref={keyInputRef}></IonInput>
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

export default App;
