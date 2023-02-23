import Lottie from "lottie-react";
import linux from "../images/linux.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const LinuxLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={linux} className={`lottie${screenSize}`} />;
};

export default LinuxLottie;
