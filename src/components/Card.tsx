import { ReactNode } from "react";
import styles from "./Card.module.css";
import { useMediaQuery } from "@mui/material";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  // const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <div className={styles.cardContainer}>{children}</div>
    </>
  );
}
