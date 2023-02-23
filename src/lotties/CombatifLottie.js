import Lottie from "lottie-react";
import combatif from "../images/combatif.json";

const CombatifLottie = () => {
  return (
    <>
      <Lottie
        animationData={combatif}
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

export default CombatifLottie;
