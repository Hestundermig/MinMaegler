import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header"

const AlleBoliger = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [homes, setHome] = useState();
  
  useEffect(() => {
      axios("https://dinmaegler.onrender.com/homes")
          .then(response => setHome(response.data))
          .catch(() => setError("Something went wrong"))
          .finally(() => setLoading(false))
  }, []);

    homes && console.log(homes)

  return (
    <section className="bg-lightgrey pt-[2%] pb-[2%]">
            <Header />
            <p className='absolute text-white text-3xl font-semibold ml-[45%] mt-[7%]'>Boliger til salg</p>
            <img className='bg-primarycolor01' src="Banner.png" alt="" />
        {error && <p className="text-red-500">{error}</p>}
        {loading && <p>Loading...</p>}
      <article className="max-w-[70rem] pt-8 flex flex-wrap gap-8 ml-[12.5%]">
        {homes && homes.map((home) => ( 
          <section className="w-[33.75rem] h-[27rem] bg-white rounded ">
            <img className="w-[33.75rem] h-[15rem]" src={home.images[0].url} alt="" />
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
    </section>
  );
};

export default AlleBoliger