import Lottie from "lottie-react";
import organise from "../images/organise.json";

const OrganiseLottie = () => {
  return (
    <>
      <Lottie
        animationData={organise}
        style={{
          height: "8em",
          width: "7em",
          display: "block",
          margin: "auto",
          marginBottom: "-3%",
        }}
      />
    </>
  );
};

export default OrganiseLottie;
