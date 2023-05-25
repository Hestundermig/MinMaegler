import { useState } from 'react';
import ContactInfo from "../components/ContantInfo";
import Footer from '../components/Footer';

const ContactUs = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    return (
        <section className=''>
            <p className='absolute text-white text-3xl font-semibold ml-[45%] mt-[7%]'>Kontakt os</p>
            <img className='bg-primarycolor01' src="Banner.png" alt="" />
        <div className='ml-[12%]'>
            <p className="text-paragraphtext text-2xl pb-[2%] pt-[6%]">Vi sidder klar til at besvare dine spørgsmål</p>
            <hr className='bg-primarycolor01 w-[7%] h-[2px]' />
            <p className='text-grey w-[40rem] pt-[2%] pb-[2%]'>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
        </div>

        <article className='flex ml-[12%]'>


            <article className="border-solid border-2 border-para02 w-[39rem] h-[44rem] rounded">
                <article className='ml-[5%]'>

                <div class="">
                    <div class="flex flex-wrap gap-[10%]">
                        <div class="relative pt-[4%] pb-[2%]">
                            <label for="name" class="">Name</label>
                            <input type="text" id="name" name="name" placeholder='Indtast dit navn' class="w-full h-[4rem] rounded order-solid border-2 border-para02 pl-[4%]" />
                        </div>
                        <div class="relative pt-[4%] pb-[2%]">
                            <label for="name" class="">Email</label>
                            <input type="text" id="name" name="name" placeholder='Indtast din email' class="w-full h-[4rem] rounded border-solid border-2 border-para02 pl-[4%]" />
                        </div>
                    </div>
                </div>

                <p className='pt-[4%] pb-[2%]'>Emne</p>
                <input type="text" name="" id="" placeholder="Indtast emne" className="border-solid border-2 border-para02 h-[4rem] w-[34rem] rounded pl-[2%] " />

                <p className='pt-[4%] pb-[2%]'>Besked</p>
                <textarea placeholder='Indtast din besked... ' id="message" name="message" value={message} onChange={handleMessageChange} className='h-[15rem] w-[34rem] border-solid border-2 border-para02 pl-[2%]' />

                <span className='flex pt-[4%] pb-[4%]'>
                    <input type="checkbox" name="" id="" className='w-6 h-6' />
                    <p className='pl-2'>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</p>
                </span>
                <button disabled={!message} className='bg-primarycolor01 text-center rounded block text-white w-[10rem] h-[4rem]'>Submit</button>
            </article>
            </article>

            <div className='flex-col ml-[4%]'>
                <ContactInfo />
            </div>
            </article>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.4564088860676!2d90.37299538361066!3d23.74355810165831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4b867eac79%3A0x21d7c909887e7955!2sGuhaa%20.%20.%20.%20The%20Cave%20Kitchen!5e0!3m2!1sda!2sdk!4v1685011745991!5m2!1sda!2sdk" className='w-full h-[31rem] pt-[8rem]' ></iframe>
            <Footer />
        </section>
    );
};

export default ContactUs;