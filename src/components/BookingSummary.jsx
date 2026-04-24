export default function BookingSummary({ bookings }) {
  return (
    <div style={summaryStyle}>
      Total bookings: {bookings.length}
    </div>
  );
}

const summaryStyle = {
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "20px",
  fontWeight: "bold",
};