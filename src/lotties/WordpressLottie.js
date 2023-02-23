import Lottie from "lottie-react";
import wordpress from "../images/wordpress.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const WordpressLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={wordpress}
      className={
        props.size == "little"
          ? `littleLottie${screenSize}`
          : `lottie${screenSize}`
      }
    />
  );
};

export default WordpressLottie;
