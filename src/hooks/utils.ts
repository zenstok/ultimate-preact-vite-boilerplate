import { useEffect, useRef } from "react";

export const useSkipFirstRun = (
  callback: SimpleCallbackFunction,
  dependencies: unknown[],
) => {
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
