import { useEffect, useState } from "react";

const useLanding = () => {
  const [landingPage, setLandingPage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLandingPage(false);
    }, [1500]);

    return () => clearTimeout(timeout);
  });
  return [
    landingPage
  ];
};

export default useLanding;
