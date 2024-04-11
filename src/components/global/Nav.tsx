import { useState } from "react";
import styles from "../../layout/style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./Animation";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Feature",
    href: "/",
  },
  {
    title: "Tokenomics",
    href: "/",
  },
  {
    title: "Docs",
    href: "",
  },
  {
    title: "Contact",
    href: "",
  },
];

export default function Nav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <a
              key={index}
              href={data.href}
              className={
                hoveredItem === data.title ? styles.hoveredLink : styles.link
              }
              onMouseEnter={() => setHoveredItem(data.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {data.title}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
