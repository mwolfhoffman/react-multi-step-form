type FormData = {
  billing: string;
};

type Step4Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step4({ updateFields }: Step4Props) {
  return (
    <>
      <h3>Finishing Up</h3>
    </>
  );
}
