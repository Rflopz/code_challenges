import { useEffect } from "react";

export const useDebouncer = (effect, dependencies, delay = 1000) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(dependencies || []), delay]);
};
