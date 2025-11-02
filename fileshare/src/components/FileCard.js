import React from "react";

function FileCard({ id, file, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
      }}
    >
      <h4>{file.name}</h4>
      <p>Size: {file.size} KB</p>
      <p>Uploaded: {file.date}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default FileCard;
