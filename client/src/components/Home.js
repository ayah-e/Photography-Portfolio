import React from "react";
import PhotoPage from './PhotoPage';
import HomeSvg from '../assets/Home.svg';
import PhilosophySvg from "../assets/Philosophy.svg"
import PortfolioSvg from "../assets/Portfolio.svg"
import FourSvg from "../assets/4.svg"
import FiveSvg from "../assets/5.svg"
import SixSvg from "../assets/6.svg"
import ClientsSvg from "../assets/Clients.svg"
import BackgroundSvg from "../assets/Background.svg"
import ContactSvg from "../assets/Contact.svg"
// import TenSvg from "../assets/10.svg"

// instead of fetching all of photos to this page we can use html and css to create a set Home page of specific photos

function Home() {
    return(
        <div className = "container">
            <img src = {HomeSvg} alt = "home"/>
            <img src = {PhilosophySvg} alt = "philosophy"/>
            <img src = {PortfolioSvg} alt = "portfolio"/>
            <img src = {FourSvg} alt = "four"/>
            <img src = {FiveSvg} alt = "five"/>
            <img src = {SixSvg} alt = "six"/>
            <img src = {ClientsSvg} alt = "clients" />
            <img src = {BackgroundSvg} alt = "background"/>
            <img src = {ContactSvg} alt = "contact" />
            {/* <img src = {TenSvg} alt = "ten" /> */}
        </div>
    )
}

export default Home;