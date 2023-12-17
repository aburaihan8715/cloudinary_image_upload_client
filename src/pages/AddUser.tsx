import { useState, ChangeEvent, FormEvent } from "react";

const initialFormData = {
  name: "",
  email: "",
  image: null as File | null,
};

const AddUser = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("image", formData.image || "");

    if (!formData.name || !formData.email || !formData.image) return alert("Name,email and image are required!");

    try {
      const response = await fetch("http://localhost:5000/api/users/create", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle success (e.g., redirect, show success message)
        console.log("User added successfully");
      } else {
        // Handle error (e.g., show error message)
        console.error("Error adding user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setFormData(initialFormData);
    }
  };
  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">add user</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded text-black"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded text-black"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Image</label>
          <input name="image" onChange={handleInputChange} className="w-full px-3 py-2 border rounded " type="file" />
        </div>

        <div>
          <button className="c-btn bg-green-600 w-full p-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
