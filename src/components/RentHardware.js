import ReturnHardwareButton from "./ReturnHardwareButton";

function RentHardware(props) {
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

  return (
    <li className={"hardwareListLi"}>
      <div className="nameAndCompanyLabel">{`${props.company} ${props.name}`}</div>
      <div className="dateLabel">{creationDate}</div>

      <div className={"rentLabel"}>
        <ReturnHardwareButton
          getHardwareData={props.getHardwareData}
          availabillity={props.availabillity}
          _id={props._id}
        />
      </div>
    </li>
  );
}

export default RentHardware;
