function DeleteHardwareButton(props) {
  async function handleRentHardware() {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/delete/${props._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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

  return (
    <>
      <button onClick={handleRentHardware} className={"activeDeleteButton"}>
        Delete
      </button>
    </>
  );
}

export default DeleteHardwareButton;
