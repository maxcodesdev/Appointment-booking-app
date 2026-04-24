import BookingCard from "./BookingCard";

export default function BookingList({
  bookings,
  handleEditBooking,
  handleDeleteBooking,
}) {
  return (
    <div style={cardStyle}>
      <h2>Appointments</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              handleEditBooking={handleEditBooking}
              handleDeleteBooking={handleDeleteBooking}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
};