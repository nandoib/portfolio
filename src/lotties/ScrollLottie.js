import Lottie from "lottie-react";
import scroll from "../images/scroll.json";
import "../css/sm.css";
import "../css/md.css";
import "../css/lg.css";
import "../css/xl.css";
import "../css/xxl.css";
import ResponsiveScreen from "../ResponsiveScreen";

const ScrollLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={scroll}
      className={`scrollLottie${screenSize} lottie${screenSize}`}
    />
  );
};

export default ScrollLottie;
