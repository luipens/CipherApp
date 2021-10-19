import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { keyOutline, refreshOutline } from 'ionicons/icons';

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
import { useRef } from "react";

const App: React.FC = () => {
  const plaintextInputRef = useRef<HTMLIonInputElement>(null);
  const keyInputRef = useRef<HTMLIonInputElement>(null);

  const generateCipher = () => {
    const enteredPlaintext = plaintextInputRef.current!.value;
    const enteredKey = keyInputRef.current!.value;
  };

  const resetInputs = () => {
    plaintextInputRef.current!.value = '';
    keyInputRef.current!.value = '';
  };

  return (
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
              <IonItem>
                <IonLabel position = "floating">Your Plaintext</IonLabel>
                <IonInput ref={plaintextInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position = "floating">Your Key</IonLabel>
                <IonInput ref={keyInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={generateCipher}>
                <IonIcon slot="start" icon={keyOutline} />
                Generate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
