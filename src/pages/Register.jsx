import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = () => {
    return ( 
        <section>
            <Header />

            <article className="shadow-md rounded-sm w-[50rem] h-[45rem] translate-x-1/2 mb-[4%]">
                <p className="text-paragraphtext mb-[3%] pt-[5%] text-xl text-center ">Opret bruger hos Din Mægler</p>

                <article className="w-[33rem] translate-x-1/4">
                    <p className="text-grey">Fulde navn</p>
                    <input type="text" name="" id="" placeholder="Fulde navn" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]" />
                    

                    <p className="text-grey">Email adresse</p>
                    <input type="text" name="" id="" placeholder="Email adresse" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

                    <p className="text-grey">Password</p>
                    <input type="text" name="" id="" placeholder="Password" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

                    <p className="text-grey">Bekræft password</p>
                    <input type="text" name="" id="" placeholder="Bekræft password" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

                    <button className="bg-primarycolor01 text-center rounded-sm block text-white w-[33rem] h-[4rem]">Opret bruger</button>
                </article>
            </article>
            <Footer />
        </section>
     );
}
 
export default Register;