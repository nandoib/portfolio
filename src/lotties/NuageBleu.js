import Lottie from "lottie-react";
import nuageBleu from "../images/NuageBleu.json";

const NuageBleu = () => {
  return (
    <>
      <Lottie
        animationData={nuageBleu}
        style={{
          height: "8em",
          width: "7em",
          display: "block",
          margin: "auto",
          marginBottom: "-3%",
        }}
      />
    </>
  );
};

export default NuageBleu;
