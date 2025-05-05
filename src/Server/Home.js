import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Check = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/f9527274-8bcb-47be-b793-15a1fb36fc70"
      );
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://api.sheetbest.com/sheets/f9527274-8bcb-47be-b793-15a1fb36fc70/email/${email}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = data.filter((item) => item.email === email);
        setData(updatedData);
      }
    } catch (error) {
      console.log("Error deleting row:", error);
    }
  };

  return (
    <div className="accordion" id="accordionExample">
      {data.length === 0 ? (
        <p className="text-center mt-4">No data found.</p>
      ) : (
        data.map((item, i) => (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header" id={`heading${i}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${i}`}
                aria-expanded="true"
                aria-controls={`collapse${i}`}
              >
                {item.date || "No Date"}
              </button>
            </h2>
            <div
              id={`collapse${i}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${i}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <strong className="display-6">{item.name}</strong> — {item.email}
                  </span>
                  <span>
                    <Link to={`/edit/${item.email}`} style={{ textDecoration: "none" }}>
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger ms-1"
                      onClick={() => handleDelete(item.email)}
                    >
                      X
                    </button>
                  </span>
                </div>
                <p>{item.message}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Check;
