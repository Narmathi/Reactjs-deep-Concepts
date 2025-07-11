import React, { useState, useEffect } from "react";
import axios from "axios";

const DebounceAPI = () => {
  const [pinCode, setPincode] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching pincode data:", error);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [pinCode]);

  return (
    <>
      <input
        type="number"
        style={{ padding: 20, width: 500 }}
        placeholder="Search Pincode!"
        onChange={(e) => setPincode(e.target.value)}
      />
    </>
  );
};

export default DebounceAPI;
