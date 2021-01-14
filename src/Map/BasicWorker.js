import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import Loader from "../Loader";

export default function Map() {
  const [svg, setSvg] = useState("");
  const workerRef = useRef(
    new Worker("./worker/generate-map/index.js", { type: "module" })
  );

  useEffect(() => {
    workerRef.current.onmessage = function (event) {
      const { type, svgString } = event.data;
      console.log("onmessage", event);
      if (type === "SVG_STRING") {
        setSvg(svgString);
      }
    };
    console.log("postmessage");
    workerRef.current.postMessage({
      type: "SEAT_DATA",
      options: {
        // optional params
        // reverse: false,
        seatTemplatePrefix: "bigtix-"
      },
      seatData: data
    });
  }, []);

  return svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : <Loader />;
}
