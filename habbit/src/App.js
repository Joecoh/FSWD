import React, { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

function App() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const res = await fetch("http://localhost:5000/api/habits");
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Habit Tracker</h1>
      <AddHabit refresh={fetchHabits} />
      <HabitList habits={habits} refresh={fetchHabits} />
    </div>
  );
}

export default App;
