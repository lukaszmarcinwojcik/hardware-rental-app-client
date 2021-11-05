import { useState, useEffect } from "react";

import AdminHardware from "./AdminHardware";
import AdminAddHardwarePanel from "./AdminAddHardwarePanel";

import "../styles/HardwareList.css";

function AdminPanel() {
  const [adminAddPanelIsActive, setAdminAddPanelIsActive] = useState(false);

  const toogleAddPanelStatus = () => {
    console.log("panel:", adminAddPanelIsActive);
    setAdminAddPanelIsActive(!adminAddPanelIsActive);
  };

  const [hardwareData, setHardwareData] = useState([]);
  useEffect(() => {
    getHardwareData();
  }, []);

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

  let hardwareDataList = hardwareData.map((hardware) => (
    <AdminHardware
      getHardwareData={getHardwareData}
      key={hardware._id}
      _id={hardware._id}
      company={hardware.company}
      name={hardware.name}
      creationDate={hardware.creationDate}
      availabillity={hardware.availabillity}
      inRepair={hardware.inRepair}
    />
  ));

  const AddHardwareBtn = () => (
    <button className={"loginPanelButton"} onClick={toogleAddPanelStatus}>
      ADD NEW HARDWARE
    </button>
  );

  return (
    <>
      <h1 className={"pageTitle"}>Admin panel</h1>

      <div className={"hardwareList"}>
        {adminAddPanelIsActive ? (
          <AdminAddHardwarePanel
            getHardwareData={getHardwareData}
            toogleAddPanelStatus={toogleAddPanelStatus}
          />
        ) : (
          <AddHardwareBtn />
        )}
        <div className={"hardwareListSortPanel"}>
          <div className={"nameAndCompanyLabel"}>Name &#38; Company</div>
          <div className={"dateLabel"}>Date</div>
          <div className={"repairLabel"}>Repair</div>
          <div className={"editLabel"}>Edit</div>
          <div className={"deleteLabel"}>Delete</div>
        </div>
        <ul className={"hardwareListUl"}>{hardwareDataList}</ul>
      </div>
    </>
  );
}

export default AdminPanel;
