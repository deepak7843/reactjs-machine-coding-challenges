import { useEffect, useState } from "react";

const useTimer = (initialVal, paused, completed) => {
  console.log('paused, completed', paused, completed);
  const [current, setCurrent] = useState(initialVal);

  useEffect(() => {
    let handler;

    if (completed) {
        setCurrent(initialVal)
    } else {
      handler = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(handler);

  }, [paused, completed, current]);

  return { current, setCurrent };
};

export default useTimer;
