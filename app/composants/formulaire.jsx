import { Input } from "./Input";

export const Formulaire = () =>  {
    return(
    <div className="bg-black w-[300px] h-[500px] m-[100px] flex flex-col items-center justify-center rounded-lg ">
       <p className="text-white text-[18px] text-justify">
       Remplissez le formulaire <br/> ci-dessous pour obtenir un<br/> <span className="pl-[0px] pt-[100px] font-[800] text-[28px]">COURS GRATUIT</span>
        </p>
       <Input/>
    </div>
    );
}