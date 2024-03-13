import Card from "../Card";

type FormData = {
  billing: string;
};

type Step3Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step3({ updateFields }: Step3Props) {
  return (
    <>
      <Card>
        <h3>Pick Addons</h3>
        <ul>
          <li>Online service</li>
          <li>Larget Storage</li>
          <li>Customizable Profile</li>
        </ul>
      </Card>
    </>
  );
}
