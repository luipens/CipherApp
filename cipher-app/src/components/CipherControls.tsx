// Luis
// This component holds the functionality for Generate and Reset buttons

import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { keyOutline, refreshOutline, copyOutline, addCircleOutline  } from "ionicons/icons";


const CipherControls: React.FC<{
  onGenerate: () => void;
  onReset: () => void;
  onCopyToClipBoard: () => void;
  onPasteFromClipBoard: () => void;
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
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onCopyToClipBoard}>
          <IonIcon slot = "start" icon ={copyOutline} />
          Copy to Clipboard
          </IonButton> 
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={props.onPasteFromClipBoard}>
            <IonIcon slot = "start" icon={addCircleOutline} />
            Paste from Clipboard
          </IonButton>
        </IonCol>
    </IonRow>
  );
};

export default CipherControls;
