import style from "./form.module.css";

export default function Home() {
  return (
    <div className={style.containte}>
      <div className={style.left}>
        <div className={style.top}>
          <div className={style.img}></div>
        </div>

        <div className={style.bottom}>
          <div className={style.text3}>Débutez votre formation diplômante</div>
          <div className={style.form}>
            <form className={`${style.formulaire} w-full  `}>
              <div className="mb-4">
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="prenom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="telephone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre Numéro de Téléphone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-l-md">
                    +241
                  </span>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="00 00 00 00"
                    required
                  />
                </div>
              </div>
              <div class="checkboxContainer">
                <input
                  className={style.input}
                  type="checkbox"
                  id="checkbox"
                  checked
                />
                <label className={style.label} for="checkbox">
                  J&accepte de recevoir des communications de la part de
                  Hismusic Institute.
                </label>
              </div>

              <button
                type="submit"
                className={`${style.btn} w-full bg-blue-900 text-white py-3 rounded-md mt-4 hover:bg-blue-800 transition duration-200`}
              >
                Je m&inscris
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.text}>
          Accédez à plus de xx heures de cours et devenez{" "}
          <span className={style.text2}>assistant ingénieur du son</span>
        </div>
      </div>
    </div>
  );
}
