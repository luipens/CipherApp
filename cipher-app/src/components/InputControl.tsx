import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { attachProps } from "@ionic/react/dist/types/components/utils";
import React from "react";

const InputControl: React.FC<{
  selectedCipher: 'ceaserCipher' | 'vernamCipher';
  onSelectCipher: (value: 'ceaserCipher' | 'vernamCipher') => void;
}> = (props) => {
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectCipher(event.detail.value);
    };
  return (
    <IonSegment value={props.selectedCipher} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="ceaserCipher">
        <IonLabel>Ceaser Cipher</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="vernamCipher">
        <IonLabel>Vernam Cipher</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
