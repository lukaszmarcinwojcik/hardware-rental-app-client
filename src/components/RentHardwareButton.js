import { useContext } from "react";
import { AppContext } from "./AppContext";

function RentHardwareButton(props) {
  const { userId } = useContext(AppContext);

  async function handleRentHardware() {
    try {
      const response = await fetch(`http://localhost:4000/hardware/rent`, {
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
          console.log(data);
          props.getHardwareData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const activeButton = (
    <button onClick={handleRentHardware} className={"activeButton"}>
      Rent
    </button>
  );
  const notActiveButton = <button className={"notActiveButton"}>Rent</button>;

  return (
    <>
      {props.availabillity && !props.inRepair ? activeButton : notActiveButton}
    </>
  );
}

export default RentHardwareButton;
