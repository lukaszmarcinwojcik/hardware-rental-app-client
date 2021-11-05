import DeleteHardwareButton from "./DeleteHardwareButton";
import RepairHardwareButton from "./RepairHardwareButton";
import AdminEditHardwarePanel from "./AdminEditHardwarePanel";

import { useState } from "react";

function AdminHardware(props) {
  let creationDate = new Date(props.creationDate);
  let dd = creationDate.getDate();
  let mm = creationDate.getMonth() + 1;
  let yyyy = creationDate.getFullYear();
  if (dd <= 9) {
    dd = "0" + dd.toString();
  }
  if (mm <= 1) {
    mm = "0" + mm.toString();
  }
  creationDate = `${dd}-${mm}-${yyyy}`;

  const [adminEditPanelIsActive, setAdminEditPanelIsActive] = useState(false);

  const toogleEditPanelStatus = () => {
    console.log("panel:", adminEditPanelIsActive);
    setAdminEditPanelIsActive(!adminEditPanelIsActive);
  };
  return (
    <>
      <li className={"hardwareListLi"}>
        <div className="nameAndCompanyLabel">{`${props.company} ${props.name}`}</div>
        <div className="dateLabel">{creationDate}</div>

        <div className={"repairLabel"}>
          <RepairHardwareButton
            getHardwareData={props.getHardwareData}
            _id={props._id}
            availabillity={props.availabillity}
            inRepair={props.inRepair}
          />
        </div>
        <div className={"editLabel"}>
          <button
            className={"activeEditButton"}
            onClick={toogleEditPanelStatus}
          >
            Edit
          </button>
        </div>
        <div className={"deleteLabel"}>
          <DeleteHardwareButton
            getHardwareData={props.getHardwareData}
            _id={props._id}
          />
        </div>
      </li>
      {adminEditPanelIsActive && (
        <AdminEditHardwarePanel
          toogleEditPanelStatus={toogleEditPanelStatus}
          getHardwareData={props.getHardwareData}
          _id={props._id}
          name={props.name}
          company={props.company}
        />
      )}
    </>
  );
}

export default AdminHardware;
