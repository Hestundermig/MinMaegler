import { useLoaderData } from "react-router-dom";
import { GrMail } from 'react-icons/gr';

export const loader = async () => {
  let response = await fetch("https://dinmaegler.onrender.com/agents");

  return await response.json();
};

const Maegler = () => {
  const agents = useLoaderData();

  console.log(agents)

  return (
    <section className="max-w-[68rem] pt-8 flex flex-wrap gap-8 ml-[12%]">
      <div className="pt-[12%] pb-[4%] pl-[18%]">
        <h5 className="text-2xl text-heading font-semibold pl-[15%]">Mød vores engagerede medarbejdere</h5>
        <p className="text-grey">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
      </div>
      {agents.slice(0, 3).map((agent ) => (
        <section className="w-[21rem] h-[28rem] gap-14 rounded-3xl">
          <img className="w-[21rem] h-[18rem]" src={agents.name} alt="" />
          <p className="justify-center text-paragraphtext"></p>
          <p className="justify-center text-paragraph"></p>
          <span className="flex">
            <GrMail className="text-2xl" />
            <p className="font-semibold font-2xl pl-[3%]">in</p>
          </span>
        </section>
      ))}
      <button className="bg-primarycolor01 text-white w-[10rem] h-[3rem] rounded-sm ml-[45%]">Se alle mæglere</button>
    </section>
  );
};

export default Maegler;