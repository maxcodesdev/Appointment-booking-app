export default function BookingFilters({
  services,
  filterService,
  setFilterService,
  sortOption,
  setSortOption,
}) {
  return (
    <div style={cardStyle}>
      <h2>Filter & Sort</h2>

      <select
        value={filterService}
        onChange={(e) => setFilterService(e.target.value)}
        style={inputStyle}
      >
        <option value="All">All services</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={inputStyle}
      >
        <option value="newest">Newest</option>
        <option value="name">Sort by name</option>
        <option value="time">Sort by time</option>
      </select>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};