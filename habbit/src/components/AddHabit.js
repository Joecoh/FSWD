import React, { useState } from "react";

function AddHabit({ refresh }) {
  const [name, setName] = useState("");

  const addHabit = async () => {
    if (!name.trim()) return;
    await fetch("http://localhost:5001/api/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    refresh();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addHabit}>Add</button>
    </div>
  );
}

export default AddHabit;
