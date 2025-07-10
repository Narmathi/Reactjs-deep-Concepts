import React, { useState } from "react";

const Password = () => {
  const [show, setShow] = useState(false);
  console.log("rendered");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          style={{ padding: 10, marginRight: 20 }}
        />
        <button
          style={{ background: "#ff00ff" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Password;
