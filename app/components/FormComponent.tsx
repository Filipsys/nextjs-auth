"use client";

const FormComponent = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    console.log(event.target.files[0]);

    const formData = new FormData();
    formData.set("file", event.target.files[0]);

    fetch("/api/save", {
      method: "POST",
      body: formData,
    });
  };

  return <input type="file" name="image" onChange={handleFileChange} />;
};

export default FormComponent;
