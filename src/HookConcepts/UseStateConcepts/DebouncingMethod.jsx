import React, { useState, useEffect } from "react";

const DebouncingMethod = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("API call with query:", data);
      setData(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);
  return (
    <>
      <h2>Debouncing {data}</h2>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
};

export default DebouncingMethod;
