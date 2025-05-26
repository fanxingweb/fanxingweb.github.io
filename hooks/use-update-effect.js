const { useRef, useEffect } = require("react");

const createUpdateEffect = (hook) => (effect, deps) => {
  const isMounted = useRef(false);

  hook(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  hook(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

const useUpdateEffect = createUpdateEffect(useEffect);

export { useUpdateEffect };
