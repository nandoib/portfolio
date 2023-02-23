import Lottie from "lottie-react";
import hello from "../images/hello.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const HelloLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return (
    <Lottie animationData={hello} style={{ height: "25em", width: "12em" }} />
  );
};

export default HelloLottie;
