import styles from './MultiStepForm.module.css'
import { useFormStateContext } from '../context/FormStateContext'

type PlanOption = {
  icon: string
  name: string
  monthly: number
  yearly: number
}

const planOptions: PlanOption[] = [
  {
    icon: '../../../assets/images/icon-arcade.svg',
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  },
  {
    icon: '../../../assets/images/icon-advanced.svg',
    name: 'Advanced',
    monthly: 12,
    yearly: 120,
  },
  {
    icon: '../../../assets/images/icon-pro.svg',
    name: 'Pro',
    monthly: 15,
    yearly: 150,
  },
]

export default function SelectPlanStep() {
  const { setFormState, formState } = useFormStateContext()

  const handleToggle = () => {
    const currentPlanOption = planOptions.find(
      (o) => o.name === formState.billingPlan,
    ) ?? { monthly: 0, yearly: 0 }
    setFormState((curr) => ({
      ...curr,
      billingCycle: curr.billingCycle === 'mo' ? 'yr' : 'mo',
      planCost:
        curr.billingCycle === 'mo'
          ? currentPlanOption.monthly
          : currentPlanOption.yearly,
    }))
  }

  const handleSelection = (e: MouseEvent, plan: PlanOption): void => {
    setFormState((curr) => ({
      ...curr,
      billingPlan: plan.name,
      planCost: formState.billingCycle === 'mo' ? plan.monthly : plan.yearly,
    }))
  }

  return (
    <>
      <h1 className={styles.formTitle}>Select your plan</h1>
      <p className={styles.formDescription}>
        You have the option of monthly or yearly billing.
      </p>
      {planOptions.map((plan) => (
        <div
          key={plan.name}
          className={`${styles.planOptionWrapper} ${
            plan.name === formState.billingPlan ? styles.activePlan : ''
          }`}
          onClick={(e: MouseEvent) => handleSelection(e, plan)}
        >
          <img src={plan.icon} alt="" style={{ float: 'left' }} />
          <h3 className={styles.planNameHeader}>{plan.name}</h3>
          <div className={styles.planOptionPricing}>
            {formState.billingCycle === 'mo' ? (
              <span>{plan.monthly}/mo</span>
            ) : (
              <span>{plan.yearly}/yr</span>
            )}
          </div>
        </div>
      ))}
      <div style={{ marginTop: '1.25em', textAlign: 'center' }}>
        Monthly
        <label className="switch" onChange={handleToggle}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        Yearly
      </div>
    </>
  )
}
