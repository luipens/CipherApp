import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC = () => {
    return (
        <IonSegment>
            <IonSegmentButton>
                <IonLabel>Ceaser Cipher</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton>
                <IonLabel>Vernam Cipher</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;