import { useContext } from "react";

import { AppContext } from "./AppContext";

function ReturnHardwareButton(props) {
  const { userId } = useContext(AppContext);

  async function handleReturnHardware() {
    try {
      const response = await fetch(`http://localhost:4000/hardware/return`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userId,
          hardware: props._id,
        }),
      });
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const data = await response.json();
        if (data.errors) {
          console.log(data.errors);
        } else {
          props.getHardwareData();
          console.log(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button onClick={handleReturnHardware} className={"activeButton"}>
      Return
    </button>
  );
}

export default ReturnHardwareButton;
