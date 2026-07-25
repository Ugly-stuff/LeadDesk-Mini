function LeadTable({ leads, changeStatus }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Budget</th>
          <th style={thStyle}>Message</th>
          <th style={thStyle}>Status</th>
        </tr>
      </thead>

      <tbody>
        {leads.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
              No leads found
            </td>
          </tr>
        ) : (
          leads.map((lead) => (
            <tr key={lead._id}>
              <td style={tdStyle}>{lead.name}</td>
              <td style={tdStyle}>{lead.email}</td>
              <td style={tdStyle}>{lead.budget}</td>
              <td style={tdStyle}>{lead.message}</td>

              <td style={tdStyle}>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    changeStatus(lead._id, e.target.value)
                  }
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  background: "#f5f5f5",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default LeadTable;