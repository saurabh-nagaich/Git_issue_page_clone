import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import IssuePage from './Components/IssuePage';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (
    <Provider store={store} >
      <Router>
        <div>
          <Header />
          <IssuePage />
          <Switch>
              <Route path="/" exact component={IssuePage} />
              <Route path="/issues" exact component={IssuePage} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
