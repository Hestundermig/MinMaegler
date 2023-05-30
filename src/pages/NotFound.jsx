import { Link } from "react-router-dom";
import "../pages/outline.css"
import Footer from "../components/Footer";
// import Header from "../components/Header";

export default function NotFound() {
    return (
        <div>
            {/* <Header /> */}
        <section className="text-center">
            <h1 className="text-8xl text-white font-bold pb-[2.5%] outline"><span className="bg-primarycolor01 ">Hov!</span></h1>
            <h5 className="text-heading font-semibold text-2xl pb-[1%]">Du er havnet på en side som ikke findes!</h5>
            <p className="text-paragraph pb-[1.5%] w-[26rem] ml-[37%]">Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
            <Link to="/"><button className="bg-heading w-[10rem] h-[3rem] text-white rounded-sm">Tilbage til forsiden</button></Link>
        </section>
            <Footer />
        </div>
    )
}