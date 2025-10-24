import { useEffect } from "react";
import { useState } from "react";

export const useTextEffectDelay = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return {
    visible,
    setVisible,
  };
};
