export default function BookingForm({
  customerName,
  setCustomerName,
  selectedService,
  setSelectedService,
  selectedTime,
  setSelectedTime,
  services,
  timeSlots,
  editingId,
  handleAddBooking,
  handleUpdateBooking,
}) {
  return (
    <div style={cardStyle}>
      <h2>{editingId ? "Edit Appointment" : "Book Appointment"}</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        style={inputStyle}
      />

      <select
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select a service</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select a time</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button
        onClick={editingId ? handleUpdateBooking : handleAddBooking}
        style={buttonStyle}
      >
        {editingId ? "Update Booking" : "Add Booking"}
      </button>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "25px",
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

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#111827",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};