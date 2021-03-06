// Luis
// This component creates a react router, so that there is multiple tabs

import {
  IonApp,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
} from "@ionic/react";

import { IonReactRouter } from '@ionic/react-router';

import { Redirect, Route } from 'react-router-dom';

import Tab1 from './components/Encryption';

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
import React from "react";
import { eyeOff, eye } from 'ionicons/icons';
import Tab2 from "./components/Decryption";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(tab1)" component={Tab1} exact={true} />
            <Route path="/:tab(tab2)" component={Tab2} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/tab1" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={eyeOff} />
              <IonLabel>Encryption</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={eye} />
              <IonLabel>Decryption</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
