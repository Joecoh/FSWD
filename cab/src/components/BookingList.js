import React from "react";

const BookingList = ({ bookings }) => {
    if (!Array.isArray(bookings) || bookings.length === 0) {
      return <p>No bookings yet</p>;
    }
  
    return (
      <ul>
        {bookings.map((b, index) => (
          <li key={index}>
            {b.name} - {b.pickup} → {b.destination}
          </li>
        ))}
      </ul>
    );
  };
  

export default BookingList;
