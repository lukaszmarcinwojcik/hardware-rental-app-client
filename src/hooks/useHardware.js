import { useState } from "react";

const useHardware = (e) => {
  const [hardwareData, setHardwareData] = useState([]);
  async function getHardwareData() {
    try {
      const response = await fetch(`http://localhost:4000/hardware`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const data = await response.json();
        if (data.errors) {
          console.log(data.error);
        } else {
          console.log(data.hardwareData);
          setHardwareData(data.hardwareData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getHardwareData,
    hardwareData,
    setHardwareData,
  };
};

export default useHardware;
