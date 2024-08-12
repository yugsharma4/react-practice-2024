import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  console.log("useonline render");
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    console.log("useOnline useeffect");
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  console.log("useOnline before return");

  return isOnline;
};

export default useOnline;
