import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTabIndicator = () => {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const location = useLocation();

  useEffect(() => {
    const tabsList = tabsListRef.current;
    if (!tabsList) return;

    const updateIndicatorPosition = () => {
      const activeTabElement = tabsList.querySelector(
        `[data-state="active"]`
      ) as HTMLElement;
      if (!activeTabElement) return;

      const { width } = activeTabElement.getBoundingClientRect();
      const left = activeTabElement.offsetLeft;

      tabsList.style.setProperty("--indicator-left", `${left}px`);
      tabsList.style.setProperty("--indicator-width", `${width}px`);
    };

    updateIndicatorPosition();

    const handleResize = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateIndicatorPosition);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId.current);
    };
  }, [location.pathname]);

  return tabsListRef;
};
