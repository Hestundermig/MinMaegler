import { BsTelephoneFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const KontaktInfo = () => {
    return (
        <section className="border-solid border-2 border-para02 w-[27rem] h-[44rem] rounded text-center">
                <article className="pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full ml-[45%]'>
                        <BsTelephoneFill className='text-white text-3xl translate-x-4 translate-y-3 mt-[5rem]' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[4%] pt-[4%] text-paragraph text-sm">Ring til os</p>
                        <p className="font-semibold pb-[6%]">+45 7070 4000</p>
                    </div>
                    <hr className='w-[85%] m-auto text-para02' />
                </article>

                <article className="pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full ml-[45%]'>
                        <FaPaperPlane className='text-white text-3xl translate-x-4 translate-y-3 mt-[2rem]' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[4%] pt-[4%] text-paragraph text-sm">Send en mail</p>
                        <p className="font-semibold pb-[6%]">4000@dinmaegler.com</p>
                    </div>
                    <hr className='w-[85%] m-auto text-para02' />
                </article>

                <article className="pb-[2.5%]">
                    <div className='bg-primarycolor01 w-[3.75rem] h-[3.75rem] rounded-full ml-[45%]'>
                        <HiLocationMarker className='text-white text-3xl translate-x-4 translate-y-3 mt-[2rem]' />
                    </div>
                    <div className='pl-[1%]'>
                        <p className="pb-[4%] pt-[4%] text-paragraph text-sm">Besøg butikken</p>
                        <p className="font-semibold pb-[6%]">Stændertorvet 78, 4000 Roskilde</p>
                    </div>
                </article>
        </section>
    );
}

export default KontaktInfo;