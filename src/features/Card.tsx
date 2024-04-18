import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <>
      <div className=''>{children}</div>
    </>
  );
}
