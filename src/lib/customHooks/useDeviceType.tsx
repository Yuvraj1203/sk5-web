import { useEffect, useState } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window === "undefined") return;

      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent);

      setDeviceType(isMobile ? "mobile" : "desktop");
    };

    checkDevice();

    // Optional: Listen to resize bhi kar sakte ho
    const handleResize = () => {
      setDeviceType(window.innerWidth <= 768 ? "mobile" : "desktop");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}
