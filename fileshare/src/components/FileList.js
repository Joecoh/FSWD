import React from "react";
import FileCard from "./FileCard";

function FileList({ files, onDelete }) {
  if (files.length === 0) return <p>No files uploaded yet.</p>;

  return (
    <div>
      {files.map((file, index) => (
        <FileCard
          key={index}
          id={index}
          file={file}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default FileList;
