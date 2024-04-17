import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };
    setIsClient(true)
  
    if (isClient) {
      updateScrollPosition();
    }

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [isClient]);
  return scrollPosition;
};

export default useScrollPosition
