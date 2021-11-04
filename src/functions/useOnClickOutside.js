import { useEffect } from "react";

// From https://usehooks.com/useOnClickOutside/
// Note that because the passed-in handler function is a new function on every render, its effect callback/cleanup is 
// run every render. To avoid this you can wrap the handler function in a useCallback before passing it into this hook.

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking the referenced element or its descendent elements. Otherwise run the handler function
        if (!ref.current || ref.current.contains(event.target) || null) {
          return;
        }
        handler(event);
      };

      // document.addEventListener("click", listener);
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        // document.removeEventListener("click", listener);
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}

export default useOnClickOutside;