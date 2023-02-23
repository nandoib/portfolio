import Lottie from "lottie-react";
import css from "../images/css.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const CssLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={css}
      className={`lottie${screenSize} lottieMiddle${screenSize}`}
    />
  );
};

export default CssLottie;
