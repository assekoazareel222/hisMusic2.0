

export const Formulaire = () =>  {
    return(
    <div className="w-[00px] h-[300px]">
        <main className="bg-[white]">
            <h1>DÉBUTEZ VOTRE <br/> FORMATION <br/> DIPLÔMANTE</h1>
         </main>
         <form className="flex flex-col bg-[#] ">
            <input type="text" placeholder="Votre Nom"/>
            <input type="text" placeholder="Votre Prenom"/>
            <input type="email" placeholder="Votre Email"/>

            <div className="">
            <input  type="number" placeholder="Pays (indicatif)"/>
            <input type="number" placeholder="Téléphone"/>
            </div>  

            <div className="">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">J'accepte de recevoir des communications<br/>
                marketing de la part de Hismusic Institute.</label>
            </div>
            

            <input type="submit" value="S’INCRIRE MAINTENANT" />


         </form>

    </div>
    );
}