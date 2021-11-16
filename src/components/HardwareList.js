import { useEffect, useState } from "react";

import Hardware from "./Hardware";
import useHardware from "../hooks/useHardware";
import "../styles/HardwareList.css";

function HardwareList() {
  const { getHardwareData, hardwareData } = useHardware();
  useEffect(() => {
    getHardwareData();
  }, []);

  let hardwareDataList = hardwareData.map((hardware) => (
    <Hardware
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
      <h1 className={"pageTitle"}>Hardware list</h1>

      <div className={"hardwareList"}>
        <div className={"hardwareListSortPanel"}>
          <div className="nameAndCompanyLabel">Name &#38; Company</div>
          <div className="dateLabel">Date</div>
          <div className={"availabillityLabel"}>Availabillity</div>{" "}
          <div className={"rentLabel"}>Rent</div>
        </div>
        <ul className={"hardwareListUl"}>{hardwareDataList}</ul>
      </div>
    </>
  );
}

export default HardwareList;
