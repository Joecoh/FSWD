import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => setBookings([]));
  }, []);

  const addBooking = (booking) => setBookings([...bookings, booking]);

  return (
    <div>
      <Header />
      <BookingForm onAdd={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;
