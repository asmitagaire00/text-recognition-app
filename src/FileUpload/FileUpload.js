import React from "react";

const FileUpload = ({ setSelectedUrl }) => {
  const handleChange = (e) => {
    console.log(e.target.files);
    setSelectedUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        marginTop: "10rem",
      }}
    >
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        name="file-input"
      />
    </div>
  );
};

export default FileUpload;
