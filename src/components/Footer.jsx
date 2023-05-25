
import { BsTelephoneFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>

            <section className='bg-lightgrey w-full h-[35rem] pl-[12%] '>

            <img src="dinmaegler.png" className='pt-16 pb-8' alt="" />
            <p className='w-[45rem] pb-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

            <section className='bg-lightgrey flex '>
                <article className='bg-white w-[24rem] h-[22rem] pt-[2%] pl-[2%] translate-y-1/4 shadow-lg rounded-sm'>

                <article className="flex  pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full'>
                        <BsTelephoneFill className='text-white text-3xl translate-x-4 translate-y-3' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[2%] text-paragraph text-sm">Ring til os</p>
                        <p className="font-semibold">+45 7070 4000</p>
                    </div>
                </article>

                <article className="flex pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full'>
                        <FaPaperPlane className='text-white text-3xl translate-x-4 translate-y-3' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[2%] text-paragraph text-sm">Send en mail</p>
                        <p className="font-semibold">4000@dinmaegler.com</p>
                    </div>
                </article>

                <article className="flex pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full'>
                        <HiLocationMarker className='text-white text-3xl translate-x-4 translate-y-3' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[2%] text-paragraph text-sm">Butik</p>
                        <p className="font-semibold">Stændertorvet 78, 4000 Roskilde</p>
                    </div>
                </article>
                <p className='w-[15rem]'>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                </article>

            <article className='pl-[8%] pt-[6%]'>
            <h6 className='font-semibold pb-[4%]'>Quick Links</h6>
            <Link><p className='pb-[2%]'>Boliger til salg</p></Link>    
            <Link><p className='pb-[2%]'>Mæglere</p></Link>    
            <Link><p className='pb-[2%]'>Kontakt os</p></Link>    
            <Link><p className='pb-[2%]'>Log ind / bliv bruger</p></Link>    
            </article>
            </section>
            </section>

            <article className='w-full h-[20rem] pl-[44%] pt-[2%] text-paragraph'>
                <p>Medlem af</p>
                <p className='uppercase font-bold text-3xl'>dms</p>
                <p>Dansk Mægler Sammenslutning</p>
            </article>

            <section className='bg-primarycolor01 w-full h-[3.75rem]'>
                <p className='text-center text-white pt-4'>Layout By Jit Banik 2020</p>
            </section>

        </footer>
    );
}

export default Footer;