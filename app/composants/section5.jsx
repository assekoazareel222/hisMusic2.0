import styles from "./section5.module.css";
import Image from "next/image";
import { formulaire } from "./formulaire";
// import { Button } from "./button";
export const Section5 = () => {
  return (
    <div className={`${styles.contain}`}>
      <section className="flex gap-12">
        <div className="flex flex-col">
          {/* setion bloc1 */}
          <h1 className="font-bold text-5xl text-white mt-16 absolute left-[100px] ">
            Que disent
            les apprenants
          </h1>
            {/* parent section */}
          <div className="flex ml-16 relative mt-[380px] gap-0">
            <section
              className="w-[480px] h-[312px] absolute right-[440px] bottom-[15px] border-none rounded-3xl flex flex-col mb-12 items-center justify-center bg-white"
              style={{ transform: "rotate(3deg)" }}
            >
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 mt-8">
                  <div className={styles.yo}></div>
                  <div className="">
                    <h3 className="text-black font-semibold text-xl">
                      Yori ORIGO
                    </h3>
                    <p className="text-black font-light text-base">
                      Hismusic Institute
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-black font-medium text-sm">
                    Concernant la formation, je dois vous avouer que
                    je suis  <br></br>  dans l'émerveillement ! En ayant parcouru
                    si peu  <br></br> d'informations,
                    j’ai déjà tellement appris et ma perception <br></br> du son
                    s'est vue changée et améliorée.
                  </p>
                  <p className="text-black font-medium text-base mb-12">
                    j'ai hâte de poursuivre et d'apprendre encore plus
                    de  <br></br> choses !
                  </p>
                </div>
              </div>
            </section>
            {/* setion bloc2 */}
            <section
              className="w-[480px] h-[312px] rounded-3xl mt-15 border-none shadow-lg shadow-gray-500/50 translate-x-1 translate-y-1 flex flex-col items-center justify-center bg-white"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 mt-8">
                  <div className={styles.rn}></div>
                  <div className="">
                    <h3 className="text-black font-semibold text-xl">
                      Rick NGOMA
                    </h3>
                    <p className="text-black font-light text-base">
                      Hismusic Institute
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-black font-medium text-sm">
                    Je ressors de là satisfait ! Très satisfait de
                    la qualité des<br></br>  cours qui ont été dispensés
                    et de la méthodologie utilisée,<br></br>  vous avez
                    pu créer des interactions numériques par
                    des <br></br>  évaluations, merci !
                  </p>
                  <p className="text-black font-medium text-base mb-12">
                    J’étais venu avec quelques brindilles de <br></br>
                    connaissances sur  le son, et là je repars
                    avec  <br></br> une boîte à outils bien fournie…
                  </p>
                </div>
              </div>
            </section>
            {/* setion bloc3 */}
            <section
              className="w-[480px] h-[312px] border-none rounded-3xl mt-15 flex shadow-lg shadow-gray-500/50 translate-x-1 translate-y-1 flex-col items-center absolute left-[421px] bottom-[20px] justify-center bg-white"
              style={{ transform: "rotate(6deg)" }}
            >
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className={styles.fl}></div>
                  <div className="">
                    <h3 className="text-black font-semibold text-xl">
                      Falik LINGOMA
                    </h3>
                    <p className="text-black font-light text-base">
                      Hismusic Institute
                    </p>
                  </div>
                </div>
                <div className="gap-6 flex flex-col">
                  <p className="text-black font-medium text-base">
                    Cette formation est très riche. Elle est
                    venue changer ma <br></br>  compréhension
                    erronée du son. J'ai vraiment appris <br></br>
                    beaucoup sur les fréquences, les
                    transducteurs,<br></br>  les processeurs... C'est
                    bien expliqué !
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="w-[20%] h-[10%] mt-8 flex gap-12 mr-[370px] mt-[150px] ">
      <button className={styles.bton}>
        Débuter la formation
        </button>
        <button className={styles.bton2}>   Acceder au cours gratuit</button>
        {/* <Button /> */}
      </div>
    </div>
  );
};
