import Lottie from "lottie-react";
import laravel from "../images/laravel.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const LaravelLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={laravel}
      className={
        props.size == "little"
          ? `littleLottie${screenSize}`
          : `lottie${screenSize}`
      }
    />
  );
};

export default LaravelLottie;
