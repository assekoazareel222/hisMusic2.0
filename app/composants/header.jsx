"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { Form } from "./formulaire1";
import Head from "next/head";
export const Header = () => {
  // État pour gérer la visibilité du formulaire
  const [isFormVisible, setFormVisible] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const handleButtonClick = () => {
    setFormVisible(true);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <p className={styles.text1}>Devenez expert en</p>
        <p className={styles.text2}>ingénierie du son</p>
      </div>
      <div className={styles.info}>
        <p className={styles.inside}>
          Notre formation 100% online vous donne toutes les clés pour devenir un
          assistant ingénieur du son hors pair.
        </p>
      </div>
      <div className={styles.groupB}>
        <button className={styles.btn1}>
          <Link href="../cours_gratuit"> Débuter la formation</Link>{" "}
        </button>
        <button className={styles.btn2} onClick={handleButtonClick}>
          Acceder au cours gratuit
        </button>
      </div>

      <div className={styles.group}>
        <h1 className={styles.nom}>Par Hyacine do Rego</h1>
        <p className={styles.titl}>
          Fondateur & Ingénieur en Chef à HDR Live <br />
          Fondateur & Instructeur principal à HISMUSIC INSTITUTE <br />
          BSc. Audio Engineering Technology, Delta Music Institute, DSU, USA,{" "}
          <br />
          MSc. Music Technology, Purdue School of Engineering & Technology,
          IUPUI, USA
        </p>
      </div>

      {/* Affichage conditionnel du formulaire */}
      {isFormVisible && (
        <div className={styles.form}>
          <div className={`${styles.formulaire}`}>
            <div
              className={`${styles.top} bg-gray-100 w-full rounded-lg shadow-lg`}
            >
              <div
                className={`${styles.Head} bg-yellow-400 rounded-t-lg`}
              ></div>
              <h2 className={`${styles.titre}`}>
                Remplissez le formulaire pour accéder au cours gratuit.
              </h2>
              <form className="m-6 bg-gray-100 mt-4">
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
                <button
                  type="submit"
                  className={`${styles.btn} w-full bg-blue-900 text-white py-3 rounded-md mt-4 hover:bg-blue-800 transition duration-200`}
                >
                  Accéder au cours gratuit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
