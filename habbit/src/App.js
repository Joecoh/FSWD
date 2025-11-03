import React, { useState, useEffect } from "react";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/habits");
      const data = await res.json();
      setHabits(data);
    } catch (err) {
      console.error("❌ Failed to load habits:", err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5001/api/habits")
      .then(res => res.json())
      .then(data => setHabits(data))  // ✅ data is the array
      .catch(err => console.error("Error loading habits:", err));
  }, []);
  

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Habit Tracker</h1>
      <AddHabit refresh={fetchHabits} />
      <HabitList habits={habits} refresh={fetchHabits} />
    </div>
  );
}

export default App;
