import { useState } from "react";
//Barber booking
export default function App() {
  const [customerName, setCustomerName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookings, setBookings] = useState([]);
  const[newTodo,setNewTodo]= useState("")

  const services = ["Haircut", "Skin Fade", "Beard Trim", "Haircut + Beard"];
  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM","3:00 PM"];

  function handleAddBooking() {
    if (
      customerName.trim() === "" ||
      selectedService === "" ||
      selectedTime === ""
    ) {
      return;
    }

    const newBooking = {
      id: crypto.randomUUID(),
      name: customerName,
      service: selectedService,
      time: selectedTime,
    };

    setBookings([...bookings, newBooking]);
    setCustomerName("");
    setSelectedService("");
    setSelectedTime("");
  }

  function handleDeleteBooking(id) {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f1ea",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>FreshCut Barber Booking</h1>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Book Appointment</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>

          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select a time</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>

          <button
            onClick={handleAddBooking}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#111827",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Add Booking
          </button>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontWeight: "bold",
          }}
        >
          Total bookings: {bookings.length}
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Appointments</h2>

          {bookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  style={{
                    backgroundColor: "#f9fafb",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "12px",
                    borderLeft: "5px solid #111827",
                  }}
                >
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
                    onClick={() => handleDeleteBooking(booking.id)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 12px",
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}