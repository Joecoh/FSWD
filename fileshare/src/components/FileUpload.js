import React, { useState } from "react";

function FileUpload({ onUpload }) {
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fileName || !fileSize) return;

    const newFile = {
      name: fileName,
      size: fileSize,
      date: new Date().toLocaleString(),
    };

    // Send to backend
    try {
      await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFile),
      });

      onUpload(newFile); // update frontend state
      setFileName("");
      setFileSize("");
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="File name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <input
        type="number"
        placeholder="File size (KB)"
        value={fileSize}
        onChange={(e) => setFileSize(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
