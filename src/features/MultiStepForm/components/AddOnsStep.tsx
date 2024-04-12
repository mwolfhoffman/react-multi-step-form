import { useState } from "react";
import styles from "./MultiStepForm.module.css";
import { useFormStateContext } from "../context/FormStateContext";

interface AddOnOption {
  name: string;
  description: string;
  selected: boolean;
  monthlyCost: number;
  yearlyCost: number;
}

export default function AddOnsStep() {
  const [selectedAddOnNames, setSelectedAddOnNames] = useState<string[]>([]);
  const { setFormState } =
    useFormStateContext();


  const addOnOptions: AddOnOption[] = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      selected: false,
      monthlyCost: 1,
      yearlyCost: 10,
    },
    {
      name: "Larget storage",
      description: "Extra 1TB of cloud save",
      selected: false,
      monthlyCost: 2,
      yearlyCost: 20,
    },
    {
      name: "Customizable profile",
      description: "Customize theme on your profile",
      selected: false,
      monthlyCost: 2,
      yearlyCost: 20,
    },
  ];

  const handleSelection = (name: string) => {
    let newSelectedNames = [];
    if (selectedAddOnNames.includes(name)) {
      newSelectedNames = selectedAddOnNames.filter((x) => x !== name);
    } else {
      newSelectedNames = [...selectedAddOnNames, name];
    }
    setSelectedAddOnNames(newSelectedNames);
  };

  return (
    <>
      <h3>Pick Addons</h3>
      {addOnOptions.map((option) => (
        <div
          key={option.name}
          className={`${styles.addOnContainer} ${
            selectedAddOnNames.includes(option.name)
              ? styles.selectedAddOn
              : null
          }`}
          onClick={() => handleSelection(option.name)}
        >
          <h4>{option.name}</h4>
          <p>{option.description}</p>
          <span>
            {" "}
            ${option.monthlyCost}/mo or ${option.yearlyCost}/yr
          </span>
        </div>
      ))}
    </>
  );
}
