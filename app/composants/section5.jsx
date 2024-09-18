import styles from "./section5.module.css";
import Image from "next/image";

export const Section5 = () => {
  return (
    <div className={`${styles.contain}`}>
      <section className="flex gap-12">
        <div className="flex flex-col">
          {/* setion bloc1 */}
          <h1 className="font-bold text-5xl text-white mt-16 ml-12">
            Que disent <br></br>
            les apprenants
          </h1>
          <div className="flex ml-16 mt-20 gap-0">
            <section
              className="w-[400px] h-[400px] border-none rounded-2xl flex flex-col mb-12 items-center justify-center bg-white"
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
                <div className="gap-6 flex flex-col">
                  <p className="text-black font-medium text-base">
                    Concernant la formation, je dois vous <br></br> avouer que
                    je suis dans l'émerveillement ! <br></br> En ayant parcouru
                    si peu d'informations, <br></br>
                    j’ai déjà tellement appris et ma perception <br></br> du son
                    s'est vue changée et améliorée.
                  </p>
                  <p className="text-black font-medium text-base mb-12">
                    j'ai hâte de poursuivre et d'apprendre <br></br> encore plus
                    de choses !
                  </p>
                </div>
              </div>
            </section>
            {/* setion bloc2 */}
            <section
              className="w-[400px] h-[400px] border-none rounded-2xl mt-15 flex flex-col items-center justify-center bg-white"
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
                <div className="gap-6 flex flex-col">
                  <p className="text-black font-medium text-base">
                    Je ressors de là satisfait ! Très satisfait de <br></br>
                    la qualité des cours qui ont été dispensés <br></br>
                    et de la méthodologie utilisée, vous avez <br></br>
                    pu créer des interactions numériques par <br></br>
                    des évaluations, merci !
                  </p>
                  <p className="text-black font-medium text-base mb-12">
                    J’étais venu avec quelques brindilles de <br></br>
                    connaissances sur le son, et là je repars <br></br>
                    avec une boîte à outils bien fournie…
                  </p>
                </div>
              </div>
            </section>
            {/* setion bloc3 */}
            <section
             className="w-[400px] h-[400px] border-none rounded-2xl mt-15 flex flex-col items-center justify-center bg-white"
             style={{ transform: "rotate(5deg)" }}
            >
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 mt-8">
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
                    Cette formation est très riche. Elle est <br></br>
                    venue changer ma compréhension <br></br>
                    erronée du son. J'ai vraiment appris <br></br>
                    beaucoup sur les fréquences, les <br></br>
                    transducteurs, les processeurs... C'est <br></br>
                    bien expliqué !
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex w-[400px] h-[500px] bg-black">
          <h1>formulare</h1>
        </div>
      </section>
      <div className="w-[180px] h-[70px] bg-black mt-8">button</div>
    </div>
  );
};
