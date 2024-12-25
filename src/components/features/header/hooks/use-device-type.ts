import { useState, useEffect } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setDeviceType({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Initial check
    checkDeviceType();

    // Add resize listener
    window.addEventListener("resize", checkDeviceType);

    // Cleanup
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
}
