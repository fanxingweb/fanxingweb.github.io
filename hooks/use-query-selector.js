import { useEffect, useRef } from "react";

const reg = /^[a-zA-Z0-9\#\.\-\_\s]+$/;

function useQuerySelector(className) {
  const doms = useRef();

  useEffect(() => {
    if (typeof className !== "string" || !reg.test(className)) return null;

    doms.current = document.querySelector(className);
  }, []);

  return doms.current;
}

export { useQuerySelector };
