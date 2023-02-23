import Lottie from "lottie-react";
import curieux from "../images/curieux.json";

const curieuxLottie = () => {
  return (
    <>
      <Lottie
        animationData={curieux}
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

export default curieuxLottie;
