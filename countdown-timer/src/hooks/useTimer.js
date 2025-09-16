import { useState, useEffect } from "react";

const useTimer = (hoursEntered, minutesEntered, secondsEntered, started, setStarted) => {
  let totalSecondsInput =
    Number(secondsEntered) +
    Number(minutesEntered * 60) +
    Number(hoursEntered * 3600);
  console.log("totalSecondsInput", totalSecondsInput);
  console.log('started', started)
  const [secondsLeft, setSecondsLeft] = useState(totalSecondsInput);

  useEffect(() => {
    if (!started) return;

    setSecondsLeft(totalSecondsInput);

    // const tick= ()=>{
      
    // }

    let intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          setStarted(false)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [totalSecondsInput, started]);


  // Perfect 👍 Let’s rewrite your countdown using setTimeout instead of setInterval.
  // This way, we don’t need to manually clear the interval inside the countdown logic — React’s cleanup will handle it neatly.

  // Cleaner useEffect with setTimeout
  // useEffect(() => {
  //   if (!started) return;
  
  //   // reset countdown whenever timer starts
  //   setSecondsLeft(totalSecondsInput);
  
  //   const tick = () => {
  //     setSecondsLeft((prev) => {
  //       if (prev <= 1) {
  //         setStarted(false);
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   };
  
  //   // schedule a tick every second
  //   const timeoutId = setTimeout(tick, 1000);
  
  //   return () => clearTimeout(timeoutId);
  // }, [secondsLeft, started, totalSecondsInput]);
  


  return {
    secondsLeft,
  };
};

export default useTimer;