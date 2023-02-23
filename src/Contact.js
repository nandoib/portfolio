import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import ResponsiveScreen from "./ResponsiveScreen";
import "./App.css";

const Contact = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ntel, setNtel] = useState("");
  const [societe, setSociete] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [response, setResponse] = useState("");
  const screenSize = ResponsiveScreen();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nandoibba@gmail.com",
        {
          method: "post",
          body: JSON.stringify({
            name: nom,
            prenom: prenom,
            mail: mail,
            ntel: ntel,
            societe: societe,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setResponse("Success");
    } catch (err) {
      setResponse("erreur");
    }
  };

  return (
    <>
      <div className="grid  md:grid-cols-3 justify-items-center gap-y-2 ">
        <div className="grid justify-items-center">
          <ImWhatsapp className={` icon${screenSize}`} />
          <p className="mt-1">
            <a href="tel:+33648733456">06 48 73 34 56</a>
          </p>
        </div>
        <div className="grid justify-items-center">
          <AiFillGithub className="mt-1" />{" "}
          <p className="">
            <a target="_blank" href="https://github.com/nandoib">
              @NandoIb
            </a>
          </p>
        </div>

        <div className="grid justify-items-center">
          <BsLinkedin className="" />
          <p className="mt-1">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nando-ibba-9877901a9/"
            >
              Nando IBBA
            </a>
          </p>
        </div>
      </div>

      <hr class="block mx-auto w-4/12 h-1 my-4 bg-orangePastel border-0 rounded " />

      <h1 className="text-center text-lg">M'envoyer un mail :</h1>

      <form onSubmit={submitFormHandler}>
        <div className="grid md:grid-cols-2 gap-x-2 gap-y-2">
          <div className="grid">
            <label>Votre nom</label>
            <input
              className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
              type="text"
              required
              placeholder="Dupont"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
          </div>

          <div className="grid">
            <label>Votre prenom</label>
            <input
              className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
              required
              type="text"
              placeholder="Jacques"
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
            />
          </div>

          <div className="grid">
            <label>Votre N° de téléphone</label>
            <input
              className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
              type="tel"
              value={ntel}
              placeholder="06.00.00.00.00"
              required
              onChange={(e) => {
                setNtel(e.target.value);
              }}
            />
          </div>

          <div className="grid">
            <label>Votre adresse mail</label>
            <input
              className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
              type="email"
              placeholder="Adresse@mail.com"
              value={mail}
              required
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="grid">
          <label>Société</label>
          <input
            className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
            type="text"
            required
            value={societe}
            onChange={(e) => {
              setSociete(e.target.value);
            }}
          />
        </div>

        <div className="grid">
          <label>Votre message</label>
          <textarea
            className="p-2 text-sm bg-[#fff8e9] border-2 border-bleuPastel rounded-xl"
            rows={3}
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <div className="grid justify-items-center mt-4">
          <button
            className="p-2 text-sm bg-bleuPastel border-2 border-bleuPastel rounded-xl"
            type="submit"
          >
            Envoyer
          </button>
        </div>

        {response == "Success" && (
          <div className="mt-3 text-center" variant="success">
            Message envoyé
          </div>
        )}
      </form>
    </>
  );
};

export default Contact;
