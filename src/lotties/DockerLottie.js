import Lottie from "lottie-react";
import docker from "../images/docker.json";
import "../App.css";

import ResponsiveScreen from "../ResponsiveScreen";

const DockerLottie = (props) => {
  const screenSize = ResponsiveScreen();
  return <Lottie animationData={docker} className={`lottie${screenSize}`} />;
};

export default DockerLottie;
