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

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [header, setHeader] = useState();

    useEffect(() => {
        axios("")
            .then(response => setHeader(response.data))
            .catch(() => setError("Der gik noget galt"))
            .finally(() => setLoading(false))
    }, []);
    return (
        <main>
            {loading && <p className="flex text-2xl"> Loading <PulseLoader color="#272928" /> </p>}
            {error && <p>{error}</p>}
            {!error && header && (
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
            )}
        </main>
    );
}

export default Home;