import "../styles/HardwareList.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import RentHardware from "./RentHardware";

function RentHardwareList() {
  const { userId } = useContext(AppContext);

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
          console.log(data.errors);
        } else {
          console.log(data.hardwareData);
          setHardwareData(data.hardwareData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

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
