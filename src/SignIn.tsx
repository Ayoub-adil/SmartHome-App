import React from 'react';
import { IonApp, IonHeader, IonContent, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonImg} from '@ionic/react';
import key from './images/key3.png';


/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <div className='ion-margin'>
          <IonIcon name="menu-outline" size="large"></IonIcon>
        </div>    
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding-top">
      <div className="right">
      <IonImg className='img' src={key}></IonImg>
      </div>
      <div className="left">
      <IonItem>
      <h1>Welcome to <span className="smart">SmartHome</span></h1>
      <p>Authenticate your account</p>
      <IonLabel position="floating">Login :</IonLabel>
      <IonInput className="input" type="email"></IonInput>
    </IonItem>
    <IonItem>
      <IonLabel position="floating">Password :</IonLabel>
      <IonInput className="input" type="password"></IonInput>
    </IonItem>
    <div className='ion-padding-top ion-text-center'>
    <IonButton shape='round' type="submit" className='btnSub ion-margin-top'>Sign up</IonButton>
    </div>
      </div>
    
    </IonContent>
  </IonApp>
);
// Tbarkellah 3lik tsenay ghir n3awd n9ra ionic wana m3ak 3ad kmlt react #Ayb
export default App;
