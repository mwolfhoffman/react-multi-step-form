import styles from './MultiStepForm.module.css'
import { useFormStateContext } from '../context/FormStateContext'

interface AddOnOption {
  name: string
  description: string
  selected: boolean
  monthlyCost: number
  yearlyCost: number
}

export default function AddOnsStep() {
  const { formState, setFormState } = useFormStateContext()

  const getCostFromBillingCycle = (option: AddOnOption) => {
    return formState.billingCycle === 'mo'
      ? option.monthlyCost
      : option.yearlyCost
  }

  const addOnOptions: AddOnOption[] = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      selected: false,
      monthlyCost: 1,
      yearlyCost: 10,
    },
    {
      name: 'Larget storage',
      description: 'Extra 1TB of cloud save',
      selected: false,
      monthlyCost: 2,
      yearlyCost: 20,
    },
    {
      name: 'Customizable profile',
      description: 'Customize theme on your profile',
      selected: false,
      monthlyCost: 2,
      yearlyCost: 20,
    },
  ]

  const handleSelection = (option: AddOnOption) => {
    let newSelectedOptions = []
    if (formState.addOns.find((x) => x.name === option.name)) {
      newSelectedOptions = formState.addOns.filter(
        (x) => x.name !== option.name,
      )
    } else {
      //  TODO: get mo/yr cost
      newSelectedOptions = [
        ...formState.addOns,
        { name: option.name, cost: getCostFromBillingCycle(option) },
      ]
    }
    setFormState((curr) => ({ ...curr, addOns: newSelectedOptions }))
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-marineBlue mb-4 sm:mt-8">
        Pick Add-ons
      </h1>
      <p className=" text-coolGray mb-8">
        Add-ons improve your gaming experience.
      </p>
      <div className="mt-8">
        {addOnOptions.map((option) => (
          <div
            key={option.name}
            className={`flex gap-4 items-baseline justify-start my-4 mx-6 p-4 border border-coolGray rounded-md ${
              formState.addOns.find((x) => x.name === option.name)
                ? 'border border-purplishBlue rounded-md bg-pastelBlue bg-opacity-20'
                : null
            }`}
            onClick={() => handleSelection(option)}
          >
            <div>
              <input
                type="checkbox"
                checked={!!formState.addOns.find((x) => x.name === option.name)}
              />
            </div>
            <div>
              <h4 className="text-marineBlue font-extrabold">{option.name}</h4>
              <p className="text-coolGray">{option.description}</p>
            </div>
            <div className="ml-auto">
              <p className="text-purplishBlue text-right">
                +$
                {formState.billingCycle === 'yr'
                  ? option.yearlyCost + '/yr'
                  : option.monthlyCost + '/mo'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
