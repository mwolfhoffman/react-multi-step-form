import FormStepWrapper from "./FormStepWrapper";

type FormData = {
  billing: string;
};

type Step3Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step3({ updateFields }: Step3Props) {
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
