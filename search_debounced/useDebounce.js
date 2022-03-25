import { useEffect, useState } from "react";

function useDebound(value, delay) {
  const [valueDebould, setValueDebound] = useState(value);

  useEffect(() => {
    const listenDebound = setTimeout(() => {
      setValueDebound(value);
    }, delay);

    return () => {
      clearTimeout(listenDebound);
    };
  }, [value, delay]);

  return valueDebould;
}

export default useDebound;
