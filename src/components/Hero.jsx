import { useEffect } from "react";

export default function Hero() {

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/homes`)
            .then((response) => console.log(response));
    }, []);

    return (
        <section>
            <img className="w-screen absolute h-3/5" src="hero.jpg" alt="" />
            <article className="relative pt-24">
            <h3 className="text-3xl font-semibold text-center text-white pb-8">Søg efter din drømmebolig</h3>
            <article className="bg-white h-40 w-3/6 mr-auto ml-auto pl-[1%] pt-5">
                <p className="text-paragraphtext pb-4"><span className="underline">Søg</span> blandt 158 boliger til salg i 74 butikker</p>
                <p className="text-para pb-2">Hvad skal din næste bolig indeholde</p>
                <input className="border-solid border-2 border-para02 ... h-8 pl-[1%]" type="text" size="60" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                <button className="w-20 h-8 bg-primarycolor01 text-white rounded-sm ml-6">Søg</button>
            </article>
            </article>
        </section>
    )
}