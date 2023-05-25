import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const LogIn = () => {
    return ( 
        <section>
            <Header />

            <article className="shadow-md rounded-sm w-[50rem] h-[45rem] translate-x-1/2 mb-[4%]">
                <p className="text-paragraphtext mb-[3%] pt-[5%] text-xl text-center ">Log ind på din konto</p>

                <article className="w-[33rem] translate-x-1/4">
                    
                    <p className="text-grey">Email</p>
                    <input type="text" name="" id="" placeholder="Email adresse" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

                    <p className="text-grey">Password</p>
                    <input type="text" name="" id="" placeholder="Password" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

                    <button className="bg-primarycolor01 text-center rounded-sm block text-white w-[33rem] h-[4rem]">Log ind</button>
                </article>
            <div className="ml-[17%] mt-[4%] ">
                <p className="pb-[2%]">Log ind med</p>
            <span className="flex gap-5">
                <button className='flex rounded-sm bg-orange w-[10rem] h-[4rem] text-white items-center pl-[6%]'> <BsGoogle className='text-2xl' />Google</button>
                <button className='flex rounded-sm bg-fbblue w-[10rem] h-[4rem] text-white items-center pl-[6%]'> <FaFacebookSquare className='text-2xl' />Facebook</button>
                <button className='flex rounded-sm bg-primarycolor01 w-[10rem] h-[4rem] text-white items-center pl-[6%]'> <AiOutlineTwitter className='text-2xl' />Twitter</button>
            </span>
                <p className="pt-[4%] pl-[19%]">Har du ikke en konto? <Link to="/register" className="text-blue hover:underline" >Opret bruger.</Link> </p> 
            </div>
            </article>


            <Footer />
        </section>
     );
}
 
export default LogIn;