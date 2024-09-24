

export const Formulaire = () =>  {
    return(
    <div className="bg-black w-[300px] h-[500px] m-[100px] flex flex-col items-center justify-center rounded-lg ">
       <p className="text-white text-[18px] text-justify">
       Remplissez le formulaire <br/> ci-dessous pour obtenir un<br/> <span className="pl-[0px] pt-[100px] font-[800] text-[28px]">COURS GRATUIT</span>
        </p>

        <form action="" className="mt-[20px] flex flex-col items-center ">
            <div className="flex flex-col gap-[16px] w-[250px]">
                <input type="text" name="" id="" placeholder="Nom" className=" px-[10px] py-[5px] rounded-lg italic"/>
                <input type="text" name="" id="" placeholder="Prénom"  className="px-[10px] py-[5px] rounded-lg italic"/>
                <input type="email" name="" id="" placeholder="Email" className=" px-[10px] py-[5px] rounded-lg italic" />
            </div>
            

            <div  className="flex flex-row pt-[10px] gap-[5px] px-[15px]">
                <input type="text" name="" id="" placeholder="Pays (indicatif)" className="w-full px-[10px] py-[5px] rounded-lg italic"/>
                <input type="tel" name="" id="" placeholder="Téléphone" className="w-full px-[10px] py-[5px] rounded-lg italic"/>
            </div>

            <button className="text-white text-center mt-[50px] w-[200px] bg-rose-500 px-[20px] py-[10px] rounded-lg font-bold" type="submit">ACCEDER AU <br/> COURS GRATUIT</button>
        </form>
    </div>
    );
}