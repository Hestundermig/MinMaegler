import { GrFormNextLink } from 'react-icons/gr';

const Nyhedsbrev = () => {
    return ( 
        <section className=''>
            <img className='absolute bg-primarycolor01' src="maskgroup.png" alt="" />
            <div className='relative flex text-white ml-[20%] pt-[5%]'>
                <p className='w-[21.25rem] text-xl font-semibold'>Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
                <span className='pl-[3%]'>
                <input className='h-12 w-[33rem] rounded-sm pl-[2%] absolute' type="text" placeholder="Indtast din email adresse"  /> 
                </span>
                <GrFormNextLink className='text-5xl relative left-[36%]' />
            </div>
        </section>
     );
}
 
export default Nyhedsbrev;