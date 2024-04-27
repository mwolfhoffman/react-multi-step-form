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
      <h1 className="text-4xl font-bold text-marineBlue mb-4  mt-8 lg:mt-0">
        Select your plan
      </h1>
      <p className=" text-coolGray mb-8">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex items-center justify-center gap-4">
        {planOptions.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex-1 ${plan.name === formState.billingPlan ? 'border border-purplishBlue bg-pastelBlue rounded-md' : ''} border border-lightGray rounded-md p-8`}
            style={{ minHeight: '200px' }}
            onClick={(e: MouseEvent) => handleSelection(e, plan)}
          >
            <div className="absolute top-2 left-2  object-cover">
              <img src={plan.icon} alt={`icon-${plan.name}`} />
            </div>

            <div className="mt-10">
              <h3 className="text-marineBlue font-semibold text-sm text-left">
                {plan.name}
              </h3>
              <div className="text-coolGray text-sm">
                {formState.billingCycle === 'mo' ? (
                  <p>${plan.monthly}/mo</p>
                ) : (
                  <p>${plan.yearly}/yr</p>
                )}
              </div>
              {formState.billingCycle === 'yr' && (
                <div className="text-xs">
                  <p> 2 months free </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="ml-3 text-gray-700 font-medium mr-4">Monthly</div>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={formState.billingCycle === 'yr'}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            {/* Background */}
            <div
              className={`w-10 h-5 ${formState.billingCycle === 'yr' ? 'bg-purplishBlue' : 'bg-marineBlue'} rounded-full shadow-inner transition-colors`}
            ></div>
            {/* Circle */}
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-0 left-0 transition-transform duration-300 transform ${formState.billingCycle === 'yr' ? 'translate-x-full' : 'translate-x-0'}`}
            ></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium ml-4">Yearly</div>
        </label>
      </div>
    </>
  )
}
