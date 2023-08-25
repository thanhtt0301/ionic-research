import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";

const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Trò chơi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <h1 slot="start">Trò chơi</h1>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon size="large" icon={personCircle} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCard className="card-game">
          {/* <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader> */}

          <IonCardContent className="card-game-content">
            <div>
              <span>ảnh</span>
              <div>
                <IonCardTitle color="light">
                  Free Fire - Bắn súng sinh tồn
                </IonCardTitle>
                <IonCardSubtitle color="light">
                  Bắng súng sinh tồn cực vui
                </IonCardSubtitle>
              </div>
              <span>Nhận</span>
            </div>
          </IonCardContent>
        </IonCard>
        <h1>
          Scroll the content and notice that the text goes behind the header and
          footer.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          culpa, ipsum illum dolores sint dignissimos quidem qui ex amet
          voluptates natus officia hic facere nam mollitia. Facere quisquam
          nostrum quae?
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Game;
