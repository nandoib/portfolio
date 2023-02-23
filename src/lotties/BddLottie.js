import Lottie from "lottie-react";
import bdd from "../images/bdd.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const BddLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={bdd} className={`lottie${screenSize}`} />;
};

export default BddLottie;
