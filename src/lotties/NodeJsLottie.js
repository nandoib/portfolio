import Lottie from "lottie-react";
import node from "../images/node1.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const NodeLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie
      animationData={node}
      className={
        props.size == "little"
          ? `littleLottie${screenSize}`
          : `lottie${screenSize}`
      }
    />
  );
};

export default NodeLottie;
