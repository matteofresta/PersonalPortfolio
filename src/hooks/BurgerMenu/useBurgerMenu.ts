import { useState } from "react";

export const useBurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return { isOpen, setOpen };
};
