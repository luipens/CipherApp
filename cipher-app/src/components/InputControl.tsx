import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { attachProps } from "@ionic/react/dist/types/components/utils";
import React from "react";

const InputControl: React.FC<{
  selectedCipher: 'caesarCipher' | 'vernamCipher';
  onSelectCipher: (value: 'caesarCipher' | 'vernamCipher') => void;
}> = (props) => {
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectCipher(event.detail.value);
    };
  return (
    <IonSegment value={props.selectedCipher} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="caesarCipher">
        <IonLabel>Ceasar Cipher</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="vernamCipher">
        <IonLabel>Vernam Cipher</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
