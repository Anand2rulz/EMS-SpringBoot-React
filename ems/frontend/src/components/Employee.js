import { useEffect, useState } from "react";
import API from "../services/Api";
import "./Employee.css";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    id: null,
    name: "",
    salary: ""
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);   // ✅ FIXED (NO .content)
  };

  const openAdd = () => {
    setForm({ id: null, name: "", salary: "" });
    setEditing(false);
    setShowForm(true);
  };

  const openEdit = (emp) => {
    setForm(emp);
    setEditing(true);
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.salary) return alert("Fill all fields");

    if (editing) {
      await API.put(`/employees/${form.id}`, form);
    } else {
      await API.post("/employees", form);
    }

    setShowForm(false);
    loadEmployees();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete employee?")) {
      await API.delete(`/employees/${id}`);
      loadEmployees();
    }
  };

  return (
    <div className="emp-container">
      <div className="emp-header">
        <h2>👨‍💼 Employees</h2>
        <button className="add-btn" onClick={openAdd}>
          + Add Employee
        </button>
      </div>

      <div className="table-wrapper">
        <table className="emp-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td className="emp-name">{e.name}</td>
                <td className="salary">₹ {e.salary}</td>
                <td>
                  <button className="edit-btn" onClick={() => openEdit(e)}>
                    ✏ Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(e.id)}>
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-box">
            <h3>{editing ? "Edit Employee" : "Add Employee"}</h3>

            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Salary"
              value={form.salary}
              onChange={(e) =>
                setForm({ ...form, salary: e.target.value })
              }
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSubmit}>
                {editing ? "Update" : "Save"}
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
