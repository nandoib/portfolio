import Lottie from "lottie-react";
import uiux from "../images/uiux.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const UiuxLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={uiux} className={`lottie${screenSize}`} />;
};

export default UiuxLottie;
