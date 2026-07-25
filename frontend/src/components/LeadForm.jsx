import { useState } from "react";
import api from "../services/api";

function LeadForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.budget ||
      !form.message
    ) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);
      await api.post("/leads", form);

      alert("Lead submitted successfully");

      setForm({
        name: "",
        email: "",
        budget: "",
        message: ""
      });

    } catch (err) {

      alert(err.response?.data?.message || "Something went wrong");

    } finally {
      setLoading(false);
    }

  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    marginBottom: "15px"
  };

  return (

    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>

      <div>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          style={inputStyle}
        >

          <option value="">Select Budget</option>

          <option value="Under $500">Under $500</option>

          <option value="$500-$2000">$500-$2000</option>

          <option value="$2000-$5000">$2000-$5000</option>

          <option value="$5000+">$5000+</option>

        </select>
      </div>

      <div>
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0066cc",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

    </form>

  );

}

export default LeadForm;