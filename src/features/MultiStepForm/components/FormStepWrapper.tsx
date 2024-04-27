import { ReactNode } from 'react'
import Card from '../../Card'

type FormStepWrapperProps = {
  children: ReactNode
}

//  TODO: move this into index.tsx

export default function FormStepWrapper({ children }: FormStepWrapperProps) {
  return (
    <>
      <Card>{children}</Card>
    </>
  )
}
