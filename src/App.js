import "./App.css";
import profilImg from "./images/profil.png";
import ResponsiveScreen from "./ResponsiveScreen";
import ReactLottie from "./lotties/ReactLottie";
import CssLottie from "./lotties/CssLottie";
import DesignLottie from "./lotties/DesignLottie";
import NodeJsLottie from "./lotties/NodeJsLottie";
import BddLottie from "./lotties/BddLottie";
import LaravelLottie from "./lotties/LaravelLottie";
import AdobeLottie from "./lotties/Adobe";
import LinuxLottie from "./lotties/LinuxLottie";
import HelloLottie from "./lotties/HelloLottie";
import SeoLottie from "./lotties/SeoLottie";
import UiuxLottie from "./lotties/UiuxLottie";
import DockerLottie from "./lotties/DockerLottie";
import formeBleu1 from "./images/formeBleu1.png";
import formeRose1 from "./images/formeRose1.png";
import WordpressLottie from "./lotties/WordpressLottie";
import formeOrange2 from "./images/formeOrange2.png";
import formeBleu1xxl from "./images/formeBleu1xxl.png";
import formeRose1xxl from "./images/formeRose1xxl.png";
import Modal from "./Modal";
import Contact from "./Contact";
import { useState } from "react";

function App() {
  const screenSize = ResponsiveScreen();
  console.log(screenSize);

  const [showContactModal, setShowContactModal] = useState(false);

  const returnSizeFormeBleu = () => {
    if (screenSize == "sm" || screenSize == "md") {
      return <img src={formeBleu1} />;
    } else {
      return <img src={formeBleu1xxl} />;
    }
  };

  const returnSizeFormeRose = () => {
    if (screenSize == "sm" || screenSize == "md") {
      return <img src={formeRose1} />;
    } else {
      return <img src={formeRose1xxl} />;
    }
  };

  return (
    <>
      <div className={` home h-screen p-8 grid`}>
        <div className="formeBleu1">{returnSizeFormeBleu()}</div>
        <h1 className={` mainTitle${screenSize} text-center mt-10  lg:mt-20 `}>
          Nando IBBA
        </h1>

        <p className="text-center mt-8 text-sm font-bold  md:mt-16 lg:px-28 xl:px-60 lg:text-[1rem] ">
          Passioné d'informatique depuis toujours. Anciennement responsable en
          développement commercial, en 2020, j'ai choisi de revenir à ma passion
          et de devenir developpeur web. J'utilise mes compétences dans ces deux
          domaines pour creer des interfaces web efficaces qui sauront
          convaincre vos clients.
        </p>

        <div className="formeRose1">{returnSizeFormeRose()}</div>

        <div className="flex mx-auto">
          <img
            className={` photoProfil${screenSize}`}
            src={profilImg}
            alt="Photo de profil"
          />
        </div>
        <div className="flex mx-auto">
          <button
            onClick={(e) => {
              setShowContactModal(true);
            }}
            className="contactButton  rounded-full font-bold text-sm mt-8 mb-20 border-2 border-white text-white lg:text-lg "
          >
            Me contacter
          </button>{" "}
          <div className={` hello${screenSize} `}>
            <HelloLottie />
          </div>
        </div>
      </div>

      <div>
        <h2 className={` secondTitle${screenSize} text-center mt-14 lg:mt-20`}>
          Mes compétences
        </h2>
        <p className="text-center  mt-10 md:mt-14 ">
          <span className="frontText p-1 text-md font-bold md:text-xl lg:text-xl  2xl:text-2xl ">
            Front End{" "}
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center p-6  ">
          <div className="grid justify-items-center mt-2">
            <ReactLottie />
            <p className=" 2xl:text-xl">
              ReactJS
              <br />
              (NextJS)
            </p>
          </div>
          <div className="grid justify-items-center ">
            <CssLottie />
            <p className="text-center 2xl:text-xl">
              CSS & Framework <br /> (Tailwind & Bootstrap){" "}
            </p>
          </div>

          <div className="formeOrange2">
            <img src={formeOrange2} />
          </div>

          <div className="grid justify-items-center col-span-3 md:col-span-1 ">
            <DesignLottie />
            <p className="text-center 2xl:text-xl">
              Design & Animation <br />
              (CSS & SVG)
            </p>
          </div>
        </div>
        <p className="text-center mb-4 mt-10 md:mt-14 lg:mt-20 ">
          <span className="backText p-1 text-md font-bold md:text-xl 2xl:text-2xl ">
            Back End{" "}
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-14 lg:mt-20 ">
          <div className="grid justify-items-center">
            <NodeJsLottie />
            <p className=" 2xl:text-xl">NodeJS</p>
          </div>
          <div className="grid justify-items-center  ">
            <BddLottie />
            <p className="text-center 2xl:text-xl">
              Base de données <br />
              (SQL, No SQL & GraphQL)
            </p>
          </div>

          <div className="grid justify-items-center mx-auto mt-10 col-span-3 md:col-span-1 ">
            <LaravelLottie />
            <p className="text-center 2xl:text-xl">PHP / Laravel</p>
          </div>
        </div>{" "}
      </div>

      <div>
        <p className="text-center mb-4 mt-10 md:mt-14 lg:mt-20 ">
          <span className="outilsText p-1 text-md font-bold md:text-xl 2xl:text-2xl ">
            Outils divers{" "}
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 mt-10 md:mt-14 lg:mt-20 gap-y-8 md:gap-y-14 lg:gap-y-20">
          <div className="grid justify-items-center">
            <DockerLottie />
            <p className="2xl:text-xl">Docker</p>
          </div>
          <div className="grid justify-items-center ">
            <LinuxLottie />
            <p className="text-center 2xl:text-xl">Linux Bash</p>
          </div>

          <div className="grid justify-items-center">
            <AdobeLottie />
            <p className="2xl:text-xl">Suite adobe</p>
          </div>

          <div className="grid justify-items-center ">
            <DesignLottie />
            <p className="text-center 2xl:text-xl">
              Outils de conception
              <br /> UML & Merise
            </p>
          </div>

          <div className="grid justify-items-center">
            <SeoLottie />
            <p className="2xl:text-xl">SEO</p>
          </div>
          <div className="grid justify-items-center ">
            <UiuxLottie />
            <p className="text-center 2xl:text-xl">UX/UI</p>
          </div>
        </div>
      </div>
      <p className={` secondTitle${screenSize} text-center mt-14 lg:mt-20`}>
        Mes projets :
      </p>
      <div className="lg:flex lg:flex-wrap p-2 xl:px-16 2xl:px-20 mt-4 ">
        <div class="flex  justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" md:max-w-xl  xl:max-w-3xl  rounded-lg  shadow-lg dark:bg-neutral-700 border-2 p-2 border-bleuPastel">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel  text-center align-baseline  rounded-full font-boldtext-primary-700">
                  <NodeJsLottie size="little" />
                </div>
                <p className="text-center text-sm">NodeJS </p>
              </div>

              <div>
                <div class="inline-block m-1 bg-rosePastel text-center align-baseline  rounded-full font-boldtext-primary-700">
                  <ReactLottie size="little" />
                </div>
                <p className="text-center text-sm">ReactJS </p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-bleuPastel font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Portfolio Nando IBBA
              </h5>
              <p class="mb-4  text-sm text-neutral-600 dark:text-neutral-200">
                Création de ce portefolio dans le cadre de ma recherche d'un
                poste de developpeur JavaScript Full Stack. Site sous React avec
                TailWind. Utilisation de l'api FormSubmit pour la reception de
                mail sans back.
              </p>
              <div className="grid self-end justify-items-center">
                <a
                  target="_blank"
                  href="https://github.com/nandoib/liste-attente-back"
                >
                  <button
                    type="button"
                    className=" bg-rosePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" md:max-w-xl  xl:max-w-3xl  rounded-lg  shadow-lg dark:bg-neutral-700 border-2 p-2 border-bleuPastel">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel  text-center align-baseline  rounded-full font-boldtext-primary-700">
                  <NodeJsLottie size="little" />
                </div>
                <p className="text-center text-sm">NodeJS </p>
              </div>

              <div>
                <div class="inline-block m-1 bg-rosePastel text-center align-baseline  rounded-full font-boldtext-primary-700">
                  <ReactLottie size="little" />
                </div>
                <p className="text-center text-sm">ReactJS </p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-bleuPastel font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Plateforme de Gestion de patientelle pour proffessions médical
              </h5>
              <p class="mb-4  text-sm text-neutral-600 dark:text-neutral-200">
                Les professionnel de santé rencontrent des problématique
                concernant la mise en place de liste d'attente de prise en
                charge. J'ai créer cette application pour permettre à une
                orthophoniste de gagner enormément de temps en passant d'une
                gestion manuelle à un gestion automatique et sécurisé de sa
                liste d'attente. L'apllication permet aussi de programmer des
                rendez-vous, un mail de rappel est envoyé la veille du
                rendez-vous.
              </p>
              <div className="grid justify-items-center">
                <a
                  target="_blank"
                  href="https://github.com/nandoib/liste-attente-back"
                >
                  <button
                    type="button"
                    className=" bg-rosePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class="  md:max-w-xl rounded-lg shadow-lg border-2 p-2 border-orangePastel">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-orangePastel  text-center align-baseline  rounded-full ">
                  <NodeJsLottie size="little" />
                </div>
                <p className="text-center text-sm">NodeJS </p>
              </div>

              <div>
                <div class="inline-block m-1 bg-bleuPastel text-center align-baseline  rounded-full font-boldtext-primary-700">
                  <ReactLottie size="little" />
                </div>
                <p className="text-center text-sm">ReactJS </p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-orangePastel font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                (Projet Perso) CRM entreprise
              </h5>
              <p class="mb-4  text-sm text-neutral-600 dark:text-neutral-200">
                J'ai décidé de reprendre le projet 'CRM AGS' et de le
                transformer en projet JavaScript, le front est en react et le
                back est une API REST sous nodeJs avec express. Le projet a été
                grandement modifié avec de nombreuse amélioration,
                principalement coté UX. Des fonctionnalités supllémentaires ont
                également été ajoutées (Gestion d'équipe, objectifs (mensuel),
                objectifs équipe,système de notification en temps réel, nouveau
                système d'attribution de tâche). A l'heure actuelle, le projet
                est toujours en développement.
              </p>
              <div className="grid justify-items-center">
                <a
                  target="_blank"
                  href="https://github.com/nandoib/Projet-crm-api-node-react--back-node-js-"
                >
                  <button
                    type="button"
                    className=" bg-rosePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" rounded-lg shadow-lg  border-2 p-2 border-rosePastel md:max-w-xl">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel text-center align-baseline  rounded-full ">
                  <WordpressLottie size="little" />
                </div>
                <p className="text-center text-sm">Wordpress</p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-rosePastel font-medium  ">
                AGS Façade
              </h5>
              <p class="mb-4 text-sm">
                J'ai eu la chance de pouvoir travailler sur la communication de
                l'entreprise AGS Group.
                <br /> Pour le site web, j'ai creer l'identité visuelle ainsi
                que la charte graphique. Le site tourne sur Wordpress et
                Elementor.
                <br /> Pour réaliser l'animation en page d'accueil, j'ai utilisé
                l'extention Slider Révolution.
              </p>
              <div className="grid  justify-items-center">
                <a target="_blank" href="https://isolexmoselle.fr/">
                  <button
                    type="button"
                    className=" bg-rosePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" rounded-lg shadow-lg  border-2 p-2 border-bleuPastel md:max-w-xl">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel text-center align-baseline  rounded-full ">
                  <WordpressLottie size="little" />
                </div>
                <p className="text-center text-sm">Wordpress</p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-bleuPastel font-medium  ">
                Sweet Galerie
              </h5>
              <p class="mb-4 text-sm">
                Création d'une boutique de vetements pour femme. Création
                identité visuelle, charte graphique, logo, wireframes.
                Intégration sur WooCommerce.
                <br />
                <b> Ajout de fonctionnalités : </b>
                <br />
                Newsletter (MailChimp), cartes cadeaux, inscription pour mailing
                retour en stock
              </p>
              <div className="grid justify-items-center">
                <a target="_blank" href="https://sweetgalerie.com/">
                  <button
                    type="button"
                    className=" bg-bleuPastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" rounded-lg shadow-lg  border-2 p-2 border-rosePastel md:max-w-xl">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel text-center align-baseline  rounded-full ">
                  <WordpressLottie size="little" />
                </div>
                <p className="text-center text-sm">Wordpress</p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-rosePastel font-medium  ">
                Paroisse protestante de Saint-Avold & Creutwald
              </h5>
              <p class="mb-4 text-sm">
                Création du site web des paroisse protestante de Saint-Avold et
                Creutzwald/Créhange (57). Site sur Wordpress (Elementor). Le
                site dispose d'un espace blog catégorisé, d'un calendrier des
                évenements, d'upload et de téléchargement de PDF.
              </p>
              <div className="grid justify-items-center">
                <a
                  target="_blank"
                  href="https://paroisseprotestante-stavold-creutzwald.fr/"
                >
                  <button
                    type="button"
                    className=" bg-rosePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center p-2 xl:w-4/12 lg:w-6/12   ">
          <div class=" rounded-lg shadow-lg  border-2 p-2 border-orangePastel md:max-w-xl">
            <div className="grid grid-cols-5 justify-items-center ">
              <div>
                <div class=" inline-block m-1 bg-bleuPastel text-center align-baseline  rounded-full ">
                  <LaravelLottie size="little" />
                </div>
                <p className="text-center text-sm">Laravel</p>
              </div>
            </div>
            <div class="p-2">
              <h5 class="mb-2 p-4 rounded-md text-center text-md bg-orangePastel font-medium  ">
                CRM AGS échafaudage
              </h5>
              <p class="mb-4 text-sm">
                L'entreprise utilisait un CRM spécialisé dans la gestion du
                batiment (proGBat). Son nombre de fonctionnalités avancés non
                nécéssaires rendait son utilisation complexe pour l'équipe
                commercial et représentait un coût important à long terme
                (license par salarié et par mois). C'est pourquoi, on m'a chargé
                de la création d'un CRM simplifié répondant au besoin de la
                société.
              </p>
              <div className="grid justify-items-center">
                <a
                  target="_blank"
                  href="https://github.com/nandoib/CRM-AGS-Echafaudage"
                >
                  <button
                    type="button"
                    className=" bg-orangePastel p-2 rounded-md "
                  >
                    Voir Projet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {setShowContactModal && (
        <Modal
          show={showContactModal}
          close={() => {
            setShowContactModal(false);
          }}
        >
          <Contact />
        </Modal>
      )}
    </>
  );
}

export default App;

//relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 //flex-col-reverse sm:flex-row Profile_profileHeight__dpbjw
