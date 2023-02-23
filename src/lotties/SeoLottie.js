import Lottie from "lottie-react";
import seo from "../images/seo.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const SeoLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={seo} className={`lottie${screenSize}`} />;
};

export default SeoLottie;
