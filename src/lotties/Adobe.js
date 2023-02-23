import Lottie from "lottie-react";
import adobe from "../images/adobe.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const AdobeLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={adobe} className={`lottie${screenSize}`} />;
};

export default AdobeLottie;
