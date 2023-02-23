import Lottie from "lottie-react";
import robe from "../images/robe.json";

const RobeLottie = () => {
  return (
    <>
      <Lottie
        animationData={robe}
        style={{
          height: "12em",
          width: "10em",
          display: "block",
          margin: "auto",
          marginBottom: "-3%",
        }}
      />
    </>
  );
};

export default RobeLottie;
