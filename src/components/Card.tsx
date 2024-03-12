import { ReactElement } from "react";
import styles from "./Card.module.css";
import { useMediaQuery } from "@mui/material";

type CardProps = {
  title: string;
  description: string;
  child?: ReactElement | null;
};

export default function Card({ title, description, child }: CardProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const renderMobileLayout = () => {
    return (
      <div className={styles.cardContainer}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        {child ? <>child</> : null}
      </div>
    );
  };

  const renderDesktopLayout = () => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.desktopSidebar}></div>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        {child ? <>child</> : null}
      </div>
    );
  };

  return <>{isMobile ? renderMobileLayout() : renderDesktopLayout()}</>;
}
