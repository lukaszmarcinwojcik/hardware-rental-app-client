function RepairHardwareButton(props) {
  async function handleRepairHardware() {
    try {
      const response = await fetch(`http://localhost:4000/admin/repair`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hardware: props._id,
          inRepair: !props.inRepair,
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
    <button onClick={handleRepairHardware} className={"activeButton"}>
      {props.inRepair ? "Finished" : "Send"}
    </button>
  );
  const notActiveButton = <button className={"notActiveButton"}>Send</button>;

  return <> {props.availabillity ? activeButton : notActiveButton}</>;
}

export default RepairHardwareButton;
