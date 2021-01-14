import React from "react";
import data from "../data";
import Loader from "../Loader";
import useGenerateSeatMap from "../useGenerateSeatMap";

export default function Map() {
  const { seatLayout, isPending, isSuccess } = useGenerateSeatMap(data);

  return isPending ? (
    <Loader />
  ) : isSuccess && seatLayout ? (
    <div dangerouslySetInnerHTML={{ __html: seatLayout }} />
  ) : (
    <div>Error generating seat map!</div>
  );
}
