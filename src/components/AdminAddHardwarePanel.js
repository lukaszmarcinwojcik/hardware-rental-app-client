import { useState } from "react";

import ErrorsList from "./ErrorList";
function AdminAddHardwarePanel(props) {
  const [hardware, setHardware] = useState({
    name: "",
    company: "",
  });
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setHardware({ ...hardware, [name]: value });
  };

  async function handleSubmit(e) {
    console.log("wysylam do bakendu: ", hardware);
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/admin/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hardware,
        }),
      });
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const data = await response.json();
        if (data.errors) {
          console.log(data);
          setErrors(data.errors);
          setHardware(data.hardware);
        } else {
          console.log(data);
          props.getHardwareData();
          props.toogleAddPanelStatus();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={"loginPanelWrapper"}>
      <div className={"formContainer"}>
        <h1>Add new hardware</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="loginPanelDiv">
            <label htmlFor="company">Company</label>
            <br />
            <input
              type="text"
              value={hardware.company}
              onChange={handleInput}
              name="company"
              id="company"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              value={hardware.name}
              onChange={handleInput}
              name="name"
              id="name"
            />
            {errors.length === 0 ? null : <ErrorsList errorsList={errors} />}
          </div>
          <button className={"loginPanelButton"} onClick={handleSubmit}>
            Add
          </button>
        </form>
        <button
          className={"loginPanelButton"}
          onClick={props.toogleAddPanelStatus}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AdminAddHardwarePanel;
