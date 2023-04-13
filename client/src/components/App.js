import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Login from "../components/Login";
import Home from './Home'
import SplashPage from './SplashPage';
import Nav from './Nav';
import ContactPage from './ContactPage';
import FilmSimsPage from './FilmSimsPage';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import {DataContext, DataProvider} from "./Context";



function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const location = useLocation();

  if (!user) return <Login onLogin={setUser} />;


return (
  <DataProvider>
    {location.pathname === "/" ? null : <Nav />}
    <div className = "App">
      <Switch>
        <Route exact path = "/">
          <SplashPage />
        </Route>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/AboutMe">
        <AboutMe />
        </Route>
        <Route path = "/Contact">
        <ContactPage />
        </Route>
        <Route path = "/filmsimulations">
        <FilmSimsPage />
        </Route>
        <Route path = "/portfolio">
          <Portfolio/>
        </Route>
      </Switch>
    </div>
  </DataProvider>
);
}

export default App;
