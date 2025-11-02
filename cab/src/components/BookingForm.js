import React, { useState } from "react";

const BookingForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, pickup, destination })
    });
    const data = await res.json();
    onAdd(data);
    setName(""); setPickup(""); setDestination("");
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Pickup" value={pickup} onChange={e => setPickup(e.target.value)} />
      <input placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
      <button type="submit">Book Cab</button>
    </form>
  );
};

export default BookingForm;
