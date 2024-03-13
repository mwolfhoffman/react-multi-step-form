type FormData = {
  billing: string;
};

type Step3Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step3({ updateFields }: Step3Props) {
  return (
    <>
      <h3>Pick Addons</h3>
    </>
  );
}
