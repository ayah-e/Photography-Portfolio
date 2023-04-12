import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from './Home'
import SplashPage from './SplashPage';


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
  <div className = "App">
    {/* <SplashPage /> */}
    <Home/>
  </div>
);
}

export default App;
