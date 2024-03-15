import styles from "./MultiStepForm.module.css";

interface AddOnOption {
  name: string;
  description: string;
  selected: boolean;
  monthlyCost: number;
  yearlyCost: number;
}

export default function AddOnsStep() {
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

  return (
    <>
      <h3>Pick Addons</h3>
      {addOnOptions.map((option) => (
        <>
          <h1>{option.name}</h1>
        </>
      ))}
    </>
  );
}
