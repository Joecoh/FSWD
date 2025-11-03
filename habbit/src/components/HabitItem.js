import React from "react";

function HabitItem({ habit, refresh }) {
  const markDone = async () => {
    await fetch(`http://localhost:5001/api/habits/done/${habit._id}`, {
      method: "PUT",
    });
    refresh();
  };

  const deleteHabit = async () => {
    await fetch(`http://localhost:5001/api/habits/${habit._id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      <div>
        {habit.name} — Done {habit.doneDates.length} days
      </div>
      <div>
        <button onClick={markDone}>✅ Done</button>
        <button onClick={deleteHabit}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default HabitItem;
