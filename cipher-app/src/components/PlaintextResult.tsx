// Luis
// This component displays decryption result as a ion card

import React from "react";

import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const PlaintextResult: React.FC<{ result:string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Plaintext</h2>
            <h3>{props.result}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default PlaintextResult;