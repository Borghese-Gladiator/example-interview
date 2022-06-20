// https://dev.to/franciscomendes10866/how-to-make-your-react-apps-responsive-with-a-custom-hook-4hd3
import { useEffect, useState } from "react";

const useMediaQuery = (minWidth) => {
  
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]); // eslint-disable-line react-hooks/exhaustive-deps
  // minWidth is a constant passed by props and should not be included in the dependency array

  return state.isDesiredWidth;
};

export default useMediaQuery;