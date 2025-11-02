import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import Booking from "./components/Booking";
import "./App.css";

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    "Home Cleaning",
    "Plumbing",
    "Electrician",
    "Carpentry",
    "Beauty at Home",
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
    alert(`You selected ${service}!`);
  };

  const handleConfirm = () => {
    alert(`Booking confirmed for ${selectedService}!`);
  };

  return (
    <div className="App">
      <h1>Service Booking</h1>
      <h3>Select a service:</h3>

      <ServiceList services={services} onSelect={handleSelect} />

      <Booking service={selectedService} onConfirm={handleConfirm} />
    </div>
  );
}

export default App;

