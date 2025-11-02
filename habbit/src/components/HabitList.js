import React from "react";
import HabitItem from "./HabitItem";

function HabitList({ habits, refresh }) {
  if (habits.length === 0) {
    return <p>No habits yet. Add one above!</p>;
  }

  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit._id} habit={habit} refresh={refresh} />
      ))}
    </div>
  );
}

export default HabitList;
