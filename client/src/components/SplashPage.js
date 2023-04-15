import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function SplashPage() {
    return (
        <div>Splash Page goes here. Your logo blah blah you know the vibes
            <Link to = "/home">
                <button>Placeholder</button>
            </Link>
        </div>
    )
}

export default SplashPage;