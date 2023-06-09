import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrMail } from 'react-icons/gr';

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
    <section className="max-w-[68rem] pt-32 flex flex-wrap gap-8 ml-[12%]">
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      <h5 className="text-2xl text-heading font-semibold pl-[15%]">Mød vores engagerede medarbejdere</h5>
        <p className="text-grey">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
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
    </section>
  );
};

export default AllAgents;
