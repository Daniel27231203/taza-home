import React, { forwardRef } from "react";
import links from "@/constants/links";
import Link from "next/link";
import scss from "./Menu.module.scss";
import { motion } from "framer-motion";

// Типизация компонента Menu с forwardRef
const Menu = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className={scss.menumenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav>
        {links.map((link, index) => (
          <div key={index} className={scss.linkBox}>
            <span>{link.icon}</span>
            <Link href={link.link}>{link.name}</Link>
          </div>
        ))}
      </nav>
    </motion.div>
  );
});

Menu.displayName = "Menu";

export default Menu;
