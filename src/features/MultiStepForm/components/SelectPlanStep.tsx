import { MouseEventHandler, useState } from "react";
import styles from "./MultiStepForm.module.css";

type PlanOption = {
  icon: string;
  name: string;
  monthly: number;
  yearly: number;
};

const planOptions: PlanOption[] = [
  {
    icon: "../../../assets/images/icon-arcade.svg",
    name: "Arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    icon: "../../../assets/images/icon-advanced.svg",
    name: "Advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    icon: "../../../assets/images/icon-pro.svg",
    name: "Pro",
    monthly: 15,
    yearly: 150,
  },
];

export default function SelectPlanStep() {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  // const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  // const handleSelection = (e: MouseEvent, plan: PlanOption): void => {
  //   const planSelection = `${plan.name}-${isMonthly ? "monthly" : "yearly"}`;
  //   setSelectedPlan(planSelection);
  //   console.log(planSelection);
  // };

  return (
    <>
      <h1 className={styles.formTitle}>Select your plan</h1>
      <p className={styles.formDescription}>
        You have the option of monthly or yearly billing.
      </p>
      {/* {planOptions.map((plan) => (
        <div
          key={plan.name}
          className={styles.planOptionWrapper}
          onClick={(e: MouseEvent) => handleSelection(e, plan)}
        >
          <img src={plan.icon} alt="" style={{ float: "left" }} />
          <h3 className={styles.planNameHeader}>{plan.name}</h3>
          <div className={styles.planOptionPricing}>
            {isMonthly ? (
              <span>{plan.monthly}/mo</span>
            ) : (
              <span>{plan.yearly}/yr</span>
            )}
          </div>
        </div>
      ))} */}
      <div style={{ marginTop: "1.25em", textAlign: "center" }}>
        Monthly
        <label className="switch" onChange={handleToggle}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        Yearly
      </div>
    </>
  );
}
