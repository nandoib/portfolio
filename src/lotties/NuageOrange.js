import Lottie from "lottie-react";
import nuageOrange from "../images/nuageOrange.json";

const NuageOrange = () => {
  return (
    <>
      <Lottie
        animationData={nuageOrange}
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

export default NuageOrange;
