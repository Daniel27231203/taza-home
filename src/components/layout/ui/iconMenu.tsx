"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/store";
import scss from "./IconMenu.module.scss";

const BurgerMenu = () => {
  const { setIsOpen, isOpen } = useStore();

  return (
    <button onClick={() => setIsOpen(!isOpen)} className={scss.iconBtn}>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        className={scss.iconLine}
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        className={scss.iconLine}
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        className={scss.iconLine}
      />
    </button>
  );
};

export default BurgerMenu;
