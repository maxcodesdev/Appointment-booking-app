export default function BookingCard({
  booking,
  handleEditBooking,
  handleDeleteBooking,
}) {
  return (
    <li style={bookingStyle}>
      <p>
        <strong>Name:</strong> {booking.name}
      </p>

      <p>
        <strong>Service:</strong> {booking.service}
      </p>

      <p>
        <strong>Time:</strong> {booking.time}
      </p>

      <button
        onClick={() => handleEditBooking(booking)}
        style={{
          ...buttonStyle,
          backgroundColor: "#2563eb",
          marginRight: "10px",
        }}
      >
        Edit
      </button>

      <button
        onClick={() => handleDeleteBooking(booking.id)}
        style={{
          ...buttonStyle,
          backgroundColor: "#dc2626",
        }}
      >
        Delete
      </button>
    </li>
  );
}

const bookingStyle = {
  backgroundColor: "#f9fafb",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "12px",
  borderLeft: "5px solid #111827",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};