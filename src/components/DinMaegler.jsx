

const DinMaegler = () => {
    return ( 
        <div className="pt-44 ml-72 mr-auto">
            <div className="flex ">
            <img className="w-96 h-84" src="maeglerimage.png" alt="" />
            <article className="w-3/6 pl-12">
                <h5 className="text-paragraphtext w-96 text-3xl pb-6 font-bold">Vi har fulgt danskerne hjem i snart 4 årtier</h5>
                <p className="text-paragraphtext text-1xl pb-4 font-semibold">Det synes vi siger noget om os!</p>
                <p className="text-grey pb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p className="text-grey">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <section className="flex pt-6">

            <article className="flex">
                <img className="w-10 h-10" src="houseone.png" alt="" />
            <div>
                <p className="pl-3 font-semibold">4829</p>
                <p className="pl-3">Boliger solgt</p>
            </div>
            </article>

            <article className="flex pl-6">
                <img className="w-10 h-10" src="Group.png" alt="" />
            <div>
                <p className="pl-3 font-semibold">158</p>
                <p className="pl-3">Boliger til salg</p>
            </div>
            </article>
            </section>
                </article>
            </div>
        </div>
     );
}

export default DinMaegler;