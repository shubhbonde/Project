import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GetstartPage from "./Components/Pages/GetStartedPage/Page/GetStarted";
import SecondGetStarted from "./Components/Pages/Second_GetStarted/Page/SecondGetStarted";
import ThirdGetStarted from "./Components/Pages/Third_GetStartedPage/Pages/third_GetStarted"
import SignUp from "./Components/Pages/SignUpPage/Pages/SignUp"
import SignIn from "./Components/Pages/SignInPage/Components/Pages/SignIn"
import Who from "./Components/Pages/Who_are_you_page/Components/pages/Who"
import AdminSignin from "./Components/Pages/SignInPage/Components/Pages/AdminSignin";
import Watchmensignin from "./Components/Pages/SignInPage/Components/Pages/WatchmenSignin"
import AdminSignup from "./Components/Pages/SignUpPage/Pages/AdminSignup"
import WatchmenSignup from "./Components/Pages/SignUpPage/Pages/WatchmenSignup"
import Adminfirstpage from "./Components/Pages/AdminPages/Components/Pages/FirstPage";
import Noticepage from "./Components/Pages/AdminPages/Components/Pages/NoticePage/Noticepage";
import Residentportal from "./Components/Pages/AdminPages/Components/Pages/ResidentDataPortalPage/Residentportal";
import Gaurdportal from "./Components/Pages/AdminPages/Components/Pages/GaurdDataPortal/Gaurdportal";
import SecurityMainUI from "./Components/Pages/SecurityGuardPages/Pages/SecurityMainUI";
import ResidentMainUI from "./Components/Pages/ResidentPages/Pages/ResidentMainUI";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <GetstartPage />
        </Route>
        <Route path="/secondScreen" exact>
          <SecondGetStarted />
        </Route>
        <Route path="/thirdScreen" exact>
          <ThirdGetStarted/>
        </Route>
        <Route path="/signup" exact>
          <SignUp/>
        </Route>
        <Route path="/resisignin" exact>
          <SignIn/>
        </Route>
        <Route path="/who" exact>
          <Who/>
        </Route>
        <Route path="/adsignin" exact>
          <AdminSignin/>
        </Route>
        <Route path="/secsignin" exact>
          <Watchmensignin/>
        </Route>
        <Route path="/adsignup" exact>
          <AdminSignup/>
        </Route>
        <Route path="/secsignup" exact>
          <WatchmenSignup/>
        </Route>
        <Route path="/adfirstpage" exact>
          <Adminfirstpage/>
        </Route>
        <Route path="/adfirstpage/ntpage" exact>
          <Noticepage/>
        </Route>
        <Route path="/adfirstpage/resiportal" exact>
          <Residentportal/>
        </Route>
        <Route path="/adfirstpage/gauportal" exact>
          <Gaurdportal/>
        </Route>
        <Route path="/secui" exact>
          <SecurityMainUI/>
        </Route>
        <Route path="/resiui" exact>
          <ResidentMainUI/>
        </Route>


        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
