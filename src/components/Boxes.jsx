

const Box = () => {
    return ( 
        <div className="pt-44 ml-72 mr-auto flex">

        <article className="flex">
            <img className="w-10 h-10" src="property.png" alt="" />
        <div className="">
            <p className="pl-3 font-semibold pb-3">Bestil et salgstjek</p>
            <p className="pl-3 w-64">Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
        </div>
        </article>

        <article className="flex">
            <img className="w-10 h-10" src="mapsflags.png" alt="" />
        <div>
            <p className="pl-3 font-semibold pb-3">74 butikker</p>
            <p className="pl-3 w-64">Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
        </div>
        </article>

        <article className="flex">
            <img className="w-10 h-10" src="mapsflags.png" alt="" />
        <div>
            <p className="pl-3 font-semibold pb-3">Tilmeld køberkartotek</p>
            <p className="pl-3 w-64">Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
        </div>
        </article>

    </div>
     );
}
 
export default Box;