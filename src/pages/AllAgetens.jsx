import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrMail } from 'react-icons/gr';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AllAgents = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [agents, setAgents] = useState();

  useEffect(() => {
    axios("https://dinmaegler.onrender.com/agents")
      .then(response => setAgents(response.data))
      .catch(() => setError("Noget gik galt"))
      .finally(() => setLoading(false))
  }, []);

  return (
    <section className="flex-wrap">
    <Header />
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {agents && agents.map((agent) => (
        <section className="w-[21rem] h-[28rem] gap-14 rounded-3xl" key={agent.id}>
          <img className="w-[21rem] h-[18rem]" src={agent.image} alt="" />
          <p className="justify-center text-paragraphtext">{agent.name}</p>
          <p className="justify-center text-paragraph">{agent.position}</p>
          <span className="flex">
            <GrMail className="text-2xl" />
            <p className="font-semibold font-2xl pl-[3%]">{agent.email}</p>
          </span>
        </section>
      ))}
      <Footer />
    </section>
  );
};

export default AllAgents;