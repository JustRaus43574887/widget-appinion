import { useState, useContext, useEffect, useCallback } from "react";

import Context from "../context/Context";

const useResize = (transitionRef) => {
  const { expand, data } = useContext(Context);

  const [transition, setTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [wrapStyle, setWrapStyle] = useState({
    width: 157,
    height: 243,
    borderRadius: 20,
  });
  const [compStyle, setCompStyle] = useState({
    borderRadius: 20,
    [data.location[0]]: isMobile ? 15 : 40,
    [data.location[1]]: isMobile ? 20 : 60,
    transformOrigin: `${data.location[0]} ${data.location[1]}`,
  });

  useEffect(() => {
    if (expand) {
      setWrapStyle((style) => ({
        ...style,
        width: 354,
        height: 505,
        borderRadius: 40,
      }));
      setCompStyle((style) => ({
        ...style,
        borderRadius: 40,
      }));
    } else {
      setWrapStyle((style) => ({
        ...style,
        width: 157,
        height: 243,
        borderRadius: 20,
      }));
      setCompStyle((style) => ({
        ...style,
        borderRadius: 20,
      }));
    }
  }, [expand]);

  useEffect(() => {
    setCompStyle((stlyle) => ({
      ...stlyle,
      [data.location[0]]: isMobile ? 15 : 40,
      [data.location[1]]: isMobile ? 20 : 60,
    }));
  }, [isMobile, data]);

  useEffect(() => {
    if (width <= 426) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  const resize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const onTransitionStart = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransition(true);
  }, []);
  const onTransitionEnd = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransition(false);
  }, []);

  useEffect(() => {
    if (transitionRef.current) {
      const ref = transitionRef.current;
      ref.addEventListener("transitionstart", onTransitionStart);
      ref.addEventListener("transitionend", onTransitionEnd);
      return () => {
        ref.removeEventListener("transitionstart", onTransitionStart);
        ref.removeEventListener("transitionend", onTransitionEnd);
      };
    }
  }, [onTransitionStart, onTransitionEnd, transitionRef]);

  return { wrapStyle, transition, compStyle };
};

export default useResize;
