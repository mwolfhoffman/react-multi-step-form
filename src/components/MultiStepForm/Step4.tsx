import FormStepWrapper from "./FormStepWrapper";

type FormData = {
  billing: string;
};

type Step4Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step4({ updateFields }: Step4Props) {
  return (
    <>
      <FormStepWrapper>
        <h3>Finishing Up</h3>
        <p>Double-check that everything looks OK before confirming.</p>

        <p>TODO</p>
      </FormStepWrapper>
    </>
  );
}
