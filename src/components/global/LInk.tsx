import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scale, slide } from "./Animation";
import styles from "./style.module.scss";

interface NavItem {
  title: string;
  href: string;
  index: number;
}

interface Props {
  data: NavItem;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const Index: React.FC<Props> = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link to={href}>{title}</Link>
    </motion.div>
  );
};

export default Index;
