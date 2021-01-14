import React, { useEffect, useState } from "react";
import data from "../data";
import Loader from "../Loader";
import generateMap from "../generateCombined";

export default function Map() {
  const [seatLayout, setSeatLayout] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeatLayout(generateMap(data));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return seatLayout ? (
    <div dangerouslySetInnerHTML={{ __html: seatLayout }} />
  ) : (
    <Loader />
  );
}
