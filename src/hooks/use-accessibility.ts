import { useCallback } from "react";

export function useAccessibility() {
  const announceChange = useCallback((message: string) => {
    const announcerElement = document.getElementById("accessibility-announcer");
    if (announcerElement) {
      announcerElement.textContent = message;
      // Clear the message after a short delay
      setTimeout(() => {
        announcerElement.textContent = "";
      }, 3000);
    }
  }, []);

  const enhanceKeyboardNavigation = useCallback(
    (
      containerRef: React.RefObject<HTMLElement>,
      focusableSelector = "button, a, input, select, textarea"
    ) => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          const focusableElements =
            containerRef.current?.querySelectorAll(focusableSelector);
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[
              focusableElements.length - 1
            ] as HTMLElement;

            if (event.shiftKey && document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            } else if (
              !event.shiftKey &&
              document.activeElement === lastElement
            ) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      };

      containerRef.current?.addEventListener("keydown", handleKeyDown);
      return () => {
        containerRef.current?.removeEventListener("keydown", handleKeyDown);
      };
    },
    []
  );

  return {
    announceChange,
    enhanceKeyboardNavigation,
  };
}
