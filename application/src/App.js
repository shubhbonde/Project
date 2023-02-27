
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import GetstartPage from './Components/Pages/GetStartedPage/Page/GetStarted';

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <GetstartPage/>

      </Route>


    </Router>
  )
}

export default App;
