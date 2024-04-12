import { useEffect } from "react";
import { useFormStateContext } from "../context/FormStateContext";

export default function FinishingUpStep() {
  const { formState, setFormState } = useFormStateContext()

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const calculateTotal = ()=>{
    return formState.addOns.reduce((acc,b)=> acc + b.cost , formState.planCost) 
  }

  return (
    <>
      <h3>Finishing Up</h3>
      <p>Double-check that everything looks OK before confirming.</p>

    <table>
      <thead>
        <tr></tr>
        <tr></tr>
      </thead>
      <tbody>
      <tr>
        <td>{formState.billingPlan}</td>
        <td>${formState.planCost}/{formState.billingCycle}</td>
      </tr>
      {
        formState.addOns.map(a=>(<tr><td>{a.name}</td> <td>{a.cost}/{formState.billingCycle}</td></tr>))
      }
      <tr>
        <td>Total (per {formState.billingCycle}):  </td>
        <td>{calculateTotal()}</td>
      </tr>
      </tbody>
    </table>

    </>
  );
}
