type FormData = {
  billing: string;
};

type FinishingUpStepProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function FinishingUpStep({
  updateFields,
}: FinishingUpStepProps) {
  return (
    <>
      <h3>Finishing Up</h3>
      <p>Double-check that everything looks OK before confirming.</p>

      <p>TODO</p>
    </>
  );
}
