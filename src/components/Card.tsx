import { Component } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  child?: Component | null;
};

export default function Card({ title, description, child }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardTitle}>{title}</h1>
      <p className={styles.cardDescription}>{description}</p>
      {child ? <>child</> : null}
    </div>
  );
}
