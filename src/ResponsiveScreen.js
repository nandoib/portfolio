import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveScreen = () => {
  //Smartphone
  const sm = useMediaQuery({ query: "(max-width: 768px)" });
  //Tablet
  const md = useMediaQuery({ query: "(max-width: 1024px)" });
  //Laptop
  const lg = useMediaQuery({ query: "(max-width: 1280px)" });
  //Desktop
  const xl = useMediaQuery({ query: "(max-width: 1536px)" });
  //Large desktop,TV
  const xxl = useMediaQuery({ query: "(max-width: 50000px)" });

  if (sm) {
    return "sm";
  }
  if (md) {
    return "md";
  }
  if (lg) {
    return "lg";
  }
  if (xl) {
    return "xl";
  }
  if (xxl) {
    return "xxl";
  }
};

export default ResponsiveScreen;
