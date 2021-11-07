import React from "react";

import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const CipherResult: React.FC<{ result:string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Ciphertext</h2>
            <h3>{props.result}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default CipherResult;
