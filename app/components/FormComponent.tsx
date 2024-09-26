"use client";

import transcribe from "../actions/transcribe";

const FormComponent = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    console.log(event.target.files[0]);

    transcribe(event.target.files[0]);
  };

  return <input type="file" name="image" onChange={handleFileChange} />;
};

export default FormComponent;
