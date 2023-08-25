import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { appsOutline, golf, rocket, search, today } from "ionicons/icons";
import Today from "./pages/today";
import Game from "./pages/game";
import Application from "./pages/application";
import Arcade from "./pages/arcade";
import Search from "./pages/search";

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/today">
            <Today />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/application">
            <Application />
          </Route>
          <Route exact path="/arcade">
            <Arcade />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Redirect to="/today" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="today" href="/today">
            <IonIcon aria-hidden="true" icon={today} />
            <IonLabel>Hôm nay</IonLabel>
          </IonTabButton>
          <IonTabButton tab="game" href="/game">
            <IonIcon aria-hidden="true" icon={rocket} />
            <IonLabel>Trò chơi</IonLabel>
          </IonTabButton>
          <IonTabButton tab="application" href="/application">
            <IonIcon aria-hidden="true" icon={appsOutline} />
            <IonLabel>Ứng dụng</IonLabel>
          </IonTabButton>
          <IonTabButton tab="arcade" href="/arcade">
            <IonIcon aria-hidden="true" icon={golf} />
            <IonLabel>Arcade</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Tìm kiếm</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
