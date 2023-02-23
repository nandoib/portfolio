import Lottie from "lottie-react";
import creatif from "../images/creatif.json";

const CreatifLottie = () => {
  return (
    <>
      <Lottie
        animationData={creatif}
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

export default CreatifLottie;
