import React, { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkmode] = useState(false);

  const darkStyle = {
    backgroundColor: "#333",
    color: "#f0f0f0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const lightStyle = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };
  return (
    <div style={darkMode ? darkStyle : lightStyle}>
      <h1>{darkMode ? "DarkMode" : "LightMode"}</h1>
      <button
        onClick={() => setDarkmode(!darkMode)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: darkMode ? "#555" : "#ddd",
          color: darkMode ? "#f0f0f0" : "#333",
          transition: "background-color 0.3s ease",
        }}
      >
        {darkMode ? "LightMode" : "DarkMode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
