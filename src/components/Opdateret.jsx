import { BsFillPlayFill } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';

const Opdateret = () => {
    return ( 
        <section className="bg-primarycolor01 w-full h-[32rem] pl-[14%]">
            <article className='pt-[9%]'>
                <h5 className='text-white font-semibold text-2xl w-[15rem] pb-[1%]'>Hold dig opdateret på salgsprocessen</h5>
                <p className='text-white w-[36rem] pb-[1%]'>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                    <span className='flex gap-6'>
                        <button className='text-primarycolor01 flex w-[11rem] h-[4rem] bg-white rounded-sm font-semibold pt-[1.2%] pl-[1.8%]'> <BsFillPlayFill className='text-2xl' /> Google Play</button>
                        <button className='flex w-[11rem] h-[4rem] border border-white text-white rounded-sm font-semibold pt-[1.2%] pl-[1.8%]'> <BsApple className='text-2xl' /> Apple Store</button>
                    </span>
                </article>
                    <span className='flex pl-[43%] -mt-[15.5rem]'>
                        <img src="phone.png" className='w-[16rem] h-[26rem] relative left-[12%]' alt="" />
                        <img src="phone1.png" className='w-[16rem] h-[26rem]' alt="" />
                    </span>
        </section>
     );
}
 
export default Opdateret;