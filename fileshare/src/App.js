import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";

function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await fetch("http://localhost:4000/files");
      const data = await res.json();
      setFiles(data);
    } catch (err) {
      console.error("Error fetching files:", err);
    }
  };

  const addFile = (file) => {
    setFiles([...files, file]);
  };

  const deleteFile = async (id) => {
    // For now just delete locally
    setFiles(files.filter((_, index) => index !== id));
    // You can add backend delete later
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📁 File Sharing System</h2>
      <FileUpload onUpload={addFile} />
      <FileList files={files} onDelete={deleteFile} />
    </div>
  );
}

export default App;