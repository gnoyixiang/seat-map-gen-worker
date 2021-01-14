import { useWorker, WORKER_STATUS } from "@koale/useworker";
import { useEffect, useMemo, useState } from "react";
import generateMap from "./generateCombined";

const useKoaleUseWorker = (seatData, options, workerOptions) => {
  const [
    generateMapWorker,
    { status: generateMapStatus, kill: killWorker }
  ] = useWorker(generateMap, workerOptions);
  const [seatLayout, setSeatLayout] = useState();
  const [error, setError] = useState();

  const handleGenerateMap = async () => {
    try {
      const svgString = await generateMapWorker(seatData, options);
      setSeatLayout(svgString);
    } catch (err) {
      console.error(err);
      setError(error);
    }
  };

  // WORKER_STATUS	  Type	  Description
  // PENDING	        string	the web worker has been initialized, but has not yet been executed
  // SUCCESS	        string	the web worker, has been executed correctly
  // RUNNING	        string	the web worker, is running
  // ERROR	          string	the web worker, ended with an error
  // TIMEOUT_EXPIRED  string	The web worker was killed because the defined timeout expired.
  const isStale = useMemo(() => {
    return generateMapStatus === WORKER_STATUS.PENDING;
  }, [generateMapStatus]);

  const isPending = useMemo(() => {
    return (
      generateMapStatus === WORKER_STATUS.PENDING ||
      generateMapStatus === WORKER_STATUS.RUNNING
    );
  }, [generateMapStatus]);

  const isSuccess = useMemo(() => {
    return generateMapStatus === WORKER_STATUS.SUCCESS;
  }, [generateMapStatus]);

  const isError = useMemo(() => {
    return (
      generateMapStatus === WORKER_STATUS.ERROR ||
      generateMapStatus === WORKER_STATUS.TIMEOUT_EXPIRED ||
      error
    );
  }, [generateMapStatus, error]);

  const isExpired = useMemo(() => {
    return generateMapStatus === WORKER_STATUS.TIMEOUT_EXPIRED;
  }, [generateMapStatus]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (seatData) {
      handleGenerateMap();
    }

    return () => {
      killWorker();
    };
  }, [seatData]);

  return {
    seatLayout,
    isStale,
    isPending,
    isSuccess,
    isError,
    isExpired
  };
};

export default useKoaleUseWorker;
