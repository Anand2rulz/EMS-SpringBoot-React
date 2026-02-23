import React, { useEffect, useState } from "react";
import API from "../services/Api";

function Department() {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: ""
  });

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const res = await API.get("/departments");
    setDepartments(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      await API.put(`/departments/${form.id}`, { name: form.name });
    } else {
      await API.post("/departments", { name: form.name });
    }

    setForm({ id: null, name: "" });
    loadDepartments();
  };

  const handleEdit = (d) => {
    setForm({ id: d.id, name: d.name });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete department?")) {
      await API.delete(`/departments/${id}`);
      loadDepartments();
    }
  };

  return (
    <div>

      <h2 className="mb-4 text-primary">🏢 Department Management</h2>

      {/* FORM */}
      <div className="card p-4 shadow mb-4">
        <h5>{form.id ? "✏️ Update Department" : "➕ Add Department"}</h5>

        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Department Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <button className={`btn ${form.id ? "btn-warning" : "btn-primary"}`}>
            {form.id ? "Update" : "Add"}
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="card shadow">
        <table className="table table-bordered table-hover mb-0 text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th width="200">Actions</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(d)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(d.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Department;
