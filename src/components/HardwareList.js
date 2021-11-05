import { useEffect, useState } from "react";

import Hardware from "./Hardware";

import "../styles/HardwareList.css";

function HardwareList() {
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
