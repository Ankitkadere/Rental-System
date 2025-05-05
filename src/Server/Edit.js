import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const Edit = () => {
  const { rowIndex: email } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });

  const getData = useCallback(async () => {
    try {
      const res = await fetch(`https://api.sheetbest.com/sheets/f9527274-8bcb-47be-b793-15a1fb36fc70/email/${email}`);
      const jsonData = await res.json();
      if (jsonData.length > 0) {
        setData(jsonData[0]);
      }
    } catch (error) {
      console.log("Error fetching edit data:", error);
    }
  }, [email]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    try {
      const res = await fetch(`https://api.sheetbest.com/sheets/f9527274-8bcb-47be-b793-15a1fb36fc70/email/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("Data updated successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Entry</h3>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control" name="name" value={data.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email (Cannot change)</label>
        <input className="form-control" name="email" value={data.email} disabled />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input className="form-control" name="date" value={data.date} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" name="message" value={data.message} onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Edit;
