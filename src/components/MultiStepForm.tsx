import { Component, ReactElement } from "react";
import Card from "./Card";

function FormContent(): ReactElementl {
  return <>form content...</>;
}

export default function MultiStepForm() {
  return (
    <>
      <Card
        title="Personal info"
        description="Please provide your name, email, address, and phone number."
        child={FormContent}
      />
    </>
  );
}
