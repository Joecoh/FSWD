import React from "react";
import HabitItem from "./HabitItem";

function HabitList({ habits, refresh }) {
  // Ensure habits is always an array
  if (!Array.isArray(habits)) {
    console.warn("⚠️ Expected habits to be an array, got:", habits);
    return <p>Loading habits...</p>;
  }

  if (habits.length === 0) return <p>No habits yet. Add one!</p>;

  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit._id} habit={habit} refresh={refresh} />
      ))}
    </div>
  );
}

export default HabitList;
