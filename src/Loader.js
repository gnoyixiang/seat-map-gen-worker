import React, { useEffect, useState } from "react";

const Loader = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let turn = 0;
    function infiniteLoop() {
      const lgoo = document.querySelector(".App-logo");
      turn += 8;
      lgoo.style.transform = `rotate(${turn % 360}deg)`;
    }
    const loopInterval = setInterval(infiniteLoop, 100);
    return () => clearInterval(loopInterval);
  }, []);

  return (
    <div>
      <img src="/assets/react.png" className="App-logo" alt="logo" />
      Loading... {seconds} seconds
    </div>
  );
};

export default Loader;
