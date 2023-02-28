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
        <Route path="/signin" exact>
          <SignIn/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
