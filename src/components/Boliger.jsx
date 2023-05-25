import { useLoaderData } from "react-router-dom";

const Boliger = () => {
  const homes = useLoaderData();

  console.log(homes)

  return (
    <section className="bg-lightgrey pt-[2%] pb-[2%]">
      <article className="text-center">
        <h1 className="font-semibold text-heading text-3xl pb-[1%]">Udvalgte Boliger</h1>
        <p className="text-para">There are many variations of passages of Lorem Ipsum available but the this in <br /> majority have suffered alteration in some</p>
      </article>
      <article className="max-w-[70rem] pt-8 flex flex-wrap gap-8 ml-[12.5%]">
        {homes.slice(0, 4).map((home ) => (
          <section className="w-[33.75rem] h-[27rem] bg-white rounded ">
            <img className="w-[33.75rem] h-[15rem]" src={home.url} alt="" />
            <section className="pl-[3%] pt-[3%]">

              <p className="font-semibold text-lg pb-[0.5%]">{home.adress1}</p>
              <span className="flex pb-[2.5%]">
                <p className="">{home.postalcode}</p>
                <p className="pl-[1%]">{home.city}</p>
              </span>

              <p className="pb-[2.5%]"><span className="font-semibold ">{home.type}</span> • Ejerudgift: 4.567 kr.</p>

              <hr className="w-[30rem] h-[1.5] text-diffrentgrey pb-[1.5%]" />

              <span className="flex">
                <p>{home.energylabel}</p>
                <p className="pl-[1.5%] ">4 værelser • 156 m²</p>
                <p className="font-semibold pl-[15rem]">Kr. {home.price}</p>
              </span>
            </section>
          </section>
        ))}
      </article>
        <button className=" bg-primarycolor01 text-white w-[10rem] h-[3rem] rounded-sm ml-[45%] gap-4">Se alle boliger</button>
    </section>
  );
};

export default Boliger