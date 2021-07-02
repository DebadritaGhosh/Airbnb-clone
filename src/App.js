//Css
import './App.css';
//Components
import Home from "./Home";
import Header from "./Header";
import Footer from './Footer';
//Pages
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
