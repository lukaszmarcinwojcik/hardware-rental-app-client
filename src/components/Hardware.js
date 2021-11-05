import RentHardwareButton from "./RentHardwareButton";

function Hardware(props) {
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

  let Avilable = () => <p className={"avilable"}>&#8226; Avilable</p>;
  let NotAvilable = () => <p className={"notAvilable"}>&#8226; Not avilable</p>;

  return (
    <li className={"hardwareListLi"}>
      <div className="nameAndCompanyLabel">{`${props.company} ${props.name}`}</div>
      <div className="dateLabel">{creationDate}</div>
      <div className={"availabillityLabel"}>
        {props.availabillity && !props.inRepair ? (
          <Avilable />
        ) : (
          <NotAvilable />
        )}
      </div>
      <div className={"rentLabel"}>
        <RentHardwareButton
          getHardwareData={props.getHardwareData}
          availabillity={props.availabillity}
          inRepair={props.inRepair}
          _id={props._id}
        />
      </div>
    </li>
  );
}

export default Hardware;
