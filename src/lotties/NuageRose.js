import Lottie from "lottie-react";
import nuageRose from "../images/nuageRose.json";

const NuageRose = () => {
  return (
    <>
      <Lottie
        animationData={nuageRose}
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

export default NuageRose;
