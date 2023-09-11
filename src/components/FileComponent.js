import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./FileComponent.css";
import { Modal, Box, Typography, Button, Input } from "@mui/material";
import { storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Styling for the upload modal
const style = {
  width: 400,
  bgcolor: "background.default",
  p: 3,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

// File component
const FileComponent = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  // Open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle changes to the input element
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Firebase upload function
  const handleUpload = () => {
    if (!file) return;

    // Storage bucket reference to firebase storage bucket
    const storageRef = ref(storage, `files/${file.name}`);

    // Upload progress and file size uploaded
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFile(url);
          console.log(url);
        });
      }
    );
  };

  return (
    <div className="file">
      <div
        className="file__container"
        onClick={handleOpen}
      >
        <AddIcon fontSize="large" />
        <p>New</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography
            variant="body1"
            paragraph
          >
            Select files you want to upload!
          </Typography>

          <Input
            type="file"
            onChange={handleChange}
          />
          <Button
            onClick={handleUpload}
            variant="contained"
          >
            Upload
          </Button>
          <Typography
            variant="h6"
            component="h4"
          >
            {percent} "% done"
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default FileComponent;
