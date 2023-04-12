import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from './Home'
import SplashPage from './SplashPage';
import Nav from './Nav';
import ContactPage from './ContactPage';
import FilmSimsPage from './FilmSimsPage';
import AboutMe from './AboutMe';
import {DataProvider} from "./Context";



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

  if (!user) return <Login onLogin={setUser} />;


return (
  <DataProvider>
        <Nav />
    <div className = "App">
      <Switch>
        <Route exact path = "/">
          <SplashPage />
        </Route>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/Contact">
        <ContactPage />
        </Route>
        <FilmSimsPage />
        <AboutMe />
      </Switch>
    </div>
  </DataProvider>
);
}

export default App;
