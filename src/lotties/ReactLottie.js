import Lottie from "lottie-react";
import react from "../images/react.json";
import "../App.css";
import ResponsiveScreen from "../ResponsiveScreen";

const ReactLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={react}
      className={
        props.size == "little"
          ? `littleLottie${screenSize}`
          : `lottie${screenSize}`
      }
    />
  );
};

export default ReactLottie;
