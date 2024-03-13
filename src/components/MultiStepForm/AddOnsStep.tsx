import FormStepWrapper from "./FormStepWrapper";

type FormData = {
  billing: string;
};

type AddOnsStepProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function AddOnsStep({ updateFields }: AddOnsStepProps) {
  return (
    <>
      <FormStepWrapper>
        <h3>Pick Addons</h3>
        <ul>
          <li>Online service</li>
          <li>Larget Storage</li>
          <li>Customizable Profile</li>
        </ul>
      </FormStepWrapper>
    </>
  );
}
