import generate from "./utils/index.js";

onmessage = function (event) {
  const { type, seatData, options, delay = 1000 } = event.data;
  if (type !== "SEAT_DATA" || !seatData) {
    return;
  }
  new Promise((resolve) => setTimeout(() => resolve(), delay)).then(() => {
    postMessage({
      type: "SVG_STRING",
      svgString: generate(seatData, options)
    });
  });
};
