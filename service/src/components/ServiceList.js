import React from "react";

function ServiceList({ services, onSelect }) {
  return (
    <div className="service-list">
      {services.map((service) => (
        <button
          key={service}
          onClick={() => onSelect(service)}
          className="service-btn"
        >
          {service}
        </button>
      ))}
    </div>
  );
}

export default ServiceList;
