import { useEffect } from 'react'
import { useFormStateContext } from '../context/FormStateContext'

export default function FinishingUpStep() {
  const { formState , setCurrentStepIndex } = useFormStateContext()

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const calculateTotal = () => {
    return formState.addOns.reduce((acc, b) => acc + b.cost, formState.planCost)
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-marineBlue mb-4 sm:mt-8">
        Finishing Up
      </h1>
      <p className=" text-coolGray mb-8">
        Double-check that everything looks OK before confirming.
      </p>
      <div className="mt-8 border border-lightGray rounded-md space-y-4 bg-magnolia text-coolGray font-light">
          <div className="flex justify-between px-4 py-2">
            <div className='text-marineBlue'>
              <h3 className='font-medium'>{formState.billingPlan} ({formState.billingCycle === 'yr' ? 'Yearly' : 'Monthly'})</h3>
              <a className='text-coolGray hover:bg-gray-100 cursor-pointer hover:underline' onClick={e => setCurrentStepIndex(1)}>Change</a>
              </div>
              <div>
              <span className='text-marineBlue font-medium'>
                ${formState.planCost}/{formState.billingCycle}
              </span>
              </div>
            </div>
          <hr />
          <div className="pb-4">

          {formState.addOns.map((a) => (
            <div className='flex justify-between px-4'>
              <span>{a.name}</span>
              <span>
                ${a.cost}/{formState.billingCycle}
              </span>
            </div>
          ))}
          </div>
          </div>

          <div className='flex justify-between p-4'>
        <span className=' text-coolGray font-light'>Total (per {formState.billingCycle === 'yr' ? 'year' : 'month'}): </span>
        <span className='text-marineBlue font-extrabold'>${calculateTotal()}/{formState.billingCycle}</span>
          </div>
          </>
  )
}
