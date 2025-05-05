import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.sheetbest.com/sheets/f9527274-8bcb-47be-b793-15a1fb36fc70", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("Error submitting data:", error);
    }
  };

  return (
    <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Add Entry</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" value={data.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows="3" value={data.message} onChange={handleChange} required />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default Add;
