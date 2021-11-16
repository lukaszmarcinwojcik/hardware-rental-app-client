import { useState, useEffect } from "react";

import AdminHardware from "./AdminHardware";
import AdminAddHardwarePanel from "./AdminAddHardwarePanel";
import useHardware from "../hooks/useHardware";

import "../styles/HardwareList.css";

function AdminPanel() {
  const { getHardwareData, hardwareData } = useHardware();
  const [adminAddPanelIsActive, setAdminAddPanelIsActive] = useState(false);

  const toogleAddPanelStatus = () => {
    console.log("panel:", adminAddPanelIsActive);
    setAdminAddPanelIsActive(!adminAddPanelIsActive);
  };

  useEffect(() => {
    getHardwareData();
  }, []);

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
