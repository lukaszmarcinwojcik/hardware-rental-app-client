import "../styles/HardwareList.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import RentHardware from "./RentHardware";
import useHardware from "../hooks/useHardware";

function RentHardwareList() {
  const { userId } = useContext(AppContext);
  const { getHardwareData, hardwareData } = useHardware();

  useEffect(() => {
    getHardwareData();
  }, []);

  let rentHardwareDataList = hardwareData.filter(
    (hardware) => hardware.user === userId
  );

  rentHardwareDataList = rentHardwareDataList.map((hardware) => (
    <RentHardware
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

  return (
    <>
      <h1 className={"pageTitle"}>Rent hardware</h1>

      <div className={"hardwareList"}>
        <div className={"hardwareListSortPanel"}>
          <div className="nameAndCompanyLabel">Name &#38; Company</div>
          <div className="dateLabel">Date</div>
          <div className={"rentLabel"}>Return</div>
        </div>
        <ul className={"hardwareListUl"}>{rentHardwareDataList}</ul>
      </div>
    </>
  );
}

export default RentHardwareList;
