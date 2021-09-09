import "./App.css";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
