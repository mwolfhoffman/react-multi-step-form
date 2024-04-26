import { useState } from 'react'
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
      <h3>Pick Addons</h3>
      {addOnOptions.map((option) => (
        <div
          key={option.name}
          className={`${styles.addOnContainer} ${
            formState.addOns.find((x) => x.name === option.name)
              ? styles.selectedAddOn
              : null
          }`}
          onClick={() => handleSelection(option)}
        >
          <h4>{option.name}</h4>
          <p>{option.description}</p>
          <span>
            {' '}
            ${option.monthlyCost}/mo or ${option.yearlyCost}/yr
          </span>
        </div>
      ))}
    </>
  )
}
