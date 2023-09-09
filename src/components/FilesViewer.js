import React, { useState, useEffect } from "react";
import "./FilesViewer.css";
import { storage } from "../config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
// import FileItem from "./FileItem";
// import FileCard from "./FileCard";

const FilesViewer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    listAll(ref(storage, "files")).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFiles((prev) => [...prev, url]);
        });
      });
    });
  }, []);

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
        {/* {files.slice(0, 5).map((url) => {
          return (
            <img
              width={200}
              height={200}
              src={url}
              alt="fileUrl"
            />
          );
        })} */}
      </div>
      {/* <div className="fileViewer__titles">
        <div className="fileViewer__titles--left">
          <p>Name</p>
        </div>
        <div className="fileViewer__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div> */}
      {/* <FileItem /> */}

      {/* {files.map(({ id, item }) => (
        <FileItem
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))} */}
    </div>
  );
};
export default FilesViewer;
