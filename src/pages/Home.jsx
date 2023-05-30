import { useState, useEffect } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import Hero from "../components/Hero";
import DinMaegler from "../components/DinMaegler";
import Boliger from "../components/Boliger";
import Nyhedsbrev from "../components/Nyhedsbrev";
import Maegler from "../components/Maegler";
import Header from "../components/Header";
import Box from "../components/Boxes";
import Opdateret from "../components/Opdateret";
import Footer from "../components/Footer";

export const loader = async () => {
    let response = await fetch("https://dinmaegler.onrender.com/homes");
  
    return await response.json();
  };

const Home = () => {

    return (
        <main>
                <section>
                    <Header />
                    <Hero />
                    <DinMaegler />
                    <Box />
                    <Boliger />
                    <Nyhedsbrev />
                    <Maegler />
                    <Opdateret />
                    <Footer />
                </section>
        </main>
    );
}

export default Home;