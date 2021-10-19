import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { keyOutline, refreshOutline } from "ionicons/icons";

const CipherControls: React.FC<{
  onGenerate: () => void;
  onReset: () => void;
}> = props => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onGenerate}>
          <IonIcon slot="start" icon={keyOutline} />
          Generate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default CipherControls;
