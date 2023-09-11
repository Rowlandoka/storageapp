import React, { useState, useEffect } from "react";
import "./FilesViewer.css";
import { storage } from "../config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

// File display component
const FilesViewer = () => {
  const [files, setFiles] = useState([]);

  // File retrieval from firebase cloud database
  useEffect(() => {
    listAll(ref(storage, "files")).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFiles((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // Styling for the retrieved image display
  const styleImage = {
    borderRadius: "5px",
    width: 250,
    height: 250,
    marginTop: "20px",
    margin: "10px",
    border: "1px solid #f4f3f3",
    outline: "none",
  };
  return (
    <div className="fileViewer">
      <div className="fileViewer__row">
        {files.slice(0, 4).map((url) => (
          <img
            key={url}
            style={styleImage}
            src={url}
            alt="fileUrl"
          />
        ))}
      </div>
    </div>
  );
};
export default FilesViewer;
