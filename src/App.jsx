import { useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingFilters from "./components/BookingFilters";
import BookingList from "./components/BookingList";
import BookingSummary from "./components/BookingSummary";

export default function App() {
  const [customerName, setCustomerName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookings, setBookings] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [filterService, setFilterService] = useState("All");
  const [sortOption, setSortOption] = useState("newest");

  const services = ["Haircut", "Skin Fade", "Beard Trim", "Haircut + Beard"];
  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  function resetForm() {
    setCustomerName("");
    setSelectedService("");
    setSelectedTime("");
  }

  function handleAddBooking() {
    if (!customerName.trim() || !selectedService || !selectedTime) return;

    const newBooking = {
      id: crypto.randomUUID(),
      name: customerName,
      service: selectedService,
      time: selectedTime,
    };

    setBookings([...bookings, newBooking]);
    resetForm();
  }

  function handleDeleteBooking(id) {
    setBookings(bookings.filter((booking) => booking.id !== id));
  }

  function handleEditBooking(booking) {
    setEditingId(booking.id);
    setCustomerName(booking.name);
    setSelectedService(booking.service);
    setSelectedTime(booking.time);
  }

  function handleUpdateBooking() {
    setBookings(
      bookings.map((booking) =>
        booking.id === editingId
          ? { ...booking, name: customerName, service: selectedService, time: selectedTime }
          : booking
      )
    );

    setEditingId(null);
    resetForm();
  }

  const filteredBookings = bookings.filter((booking) => {
    if (filterService === "All") return true;
    return booking.service === filterService;
  });

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "time") return a.time.localeCompare(b.time);
    return 0;
  });

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1>FreshCut Barber Booking</h1>
        </header>

        <BookingForm
          customerName={customerName}
          setCustomerName={setCustomerName}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          services={services}
          timeSlots={timeSlots}
          editingId={editingId}
          handleAddBooking={handleAddBooking}
          handleUpdateBooking={handleUpdateBooking}
        />

        <BookingSummary bookings={bookings} />

        <BookingFilters
          services={services}
          filterService={filterService}
          setFilterService={setFilterService}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <BookingList
          bookings={sortedBookings}
          handleEditBooking={handleEditBooking}
          handleDeleteBooking={handleDeleteBooking}
        />
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f4f1ea",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const headerStyle = {
  backgroundColor: "#1f2937",
  color: "white",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  marginBottom: "30px",
};