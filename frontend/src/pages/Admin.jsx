import { useEffect, useState } from "react";
import api from "../services/api";
import LeadTable from "../components/LeadTable";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const loadLeads = async () => {
    try {
      const res = await api.get(`/leads?search=${search}`);
      setLeads(res.data);
    } catch (err) {
      console.error("Failed to fetch leads", err);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [search]);

  const changeStatus = async (id, status) => {
    try {
      await api.patch(`/leads/${id}`, { status });
      loadLeads();
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>

      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px 12px",
          fontSize: "15px",
          width: "100%",
          maxWidth: "350px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />

      <LeadTable leads={leads} changeStatus={changeStatus} />
    </div>
  );
}

export default Admin;