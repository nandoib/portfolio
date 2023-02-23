import Lottie from "lottie-react";
import design from "../images/design.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const DesignLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={design} className={`lottie${screenSize}`} />;
};

export default DesignLottie;
