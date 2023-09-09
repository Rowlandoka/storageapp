import React from "react";
import "./FileItem.css";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ url }) => {
  // const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`;

  const readableFileSizeStr = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);
    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };
  return (
    <div className="fileItem">
      <a
        href={url}
        target="__blank"
        rel="noreferrer"
        download
      >
        <div className="fileItem--left">
          <InsertDriveFileIcon />
          <p>{url.name}</p>
        </div>
        <div className="fileItem--right">
          {/* <p>{fileDate}</p> */}
          <p>{readableFileSizeStr(url?.size)}</p>
        </div>
      </a>
    </div>
  );
};
export default FileItem;
