import React from "react";

function Booking({ service, onConfirm }) {
  if (!service) return null;

  return (
    <div className="booking-section">
      <h2>Booking for: {service}</h2>
      <button onClick={onConfirm}>Confirm Booking</button>
    </div>
  );
}

export default Booking;
