// src/FirebaseFirestore.js
import React, { useEffect, useState } from "react";
import { database } from "./config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

function FirebaseFirestore() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [id, setId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState([]);

  const valueRef = collection(database, "demo");

  useEffect(() => {
    // Real-time Firestore listener
    const unsub = onSnapshot(valueRef, (snapshot) => {
      setVal(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsub(); // Cleanup
  }, []);

  const handleCreate = async () => {
    if (!fname || !lname) {
      alert("Both first and last names are required.");
      return;
    }
    await addDoc(valueRef, { name1: fname, name2: lname });
    setFname("");
    setLname("");
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(database, "demo", id));
  };

  const handleEdit = (id, name1, name2) => {
    setId(id);
    setFname(name1);
    setLname(name2);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!fname || !lname) {
      alert("Both first and last names are required.");
      return;
    }
    const docRef = doc(database, "demo", id);
    await updateDoc(docRef, { name1: fname, name2: lname });
    setFname("");
    setLname("");
    setIsEditing(false);
  };

  return (
    <div className="container" style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>Firebase Firestore CRUD</h2>
      <input
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />
      <input
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />
      {!isEditing ? (
        <button onClick={handleCreate} style={{ padding: "10px 20px", marginRight: 10 }}>
          Create
        </button>
      ) : (
        <button onClick={handleUpdate} style={{ padding: "10px 20px", marginRight: 10 }}>
          Update
        </button>
      )}

      <div style={{ marginTop: 30 }}>
        {val.map((entry) => (
          <div
            key={entry.id}
            style={{
              padding: 15,
              marginBottom: 10,
              border: "1px solid #ddd",
              borderRadius: 5
            }}
          >
            <h4>{entry.name1} {entry.name2}</h4>
            <button onClick={() => handleDelete(entry.id)} style={{ marginRight: 10 }}>
              Delete
            </button>
            <button onClick={() => handleEdit(entry.id, entry.name1, entry.name2)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirebaseFirestore;
