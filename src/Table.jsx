import { useState } from "react";
import "./Table.css";

function Box({ value, onBoxClick, className }) {
  const [visible, invisible] = useState();

  return (
    <button
      className={` ${className ? "invisible" : "table-buttons"}`}
      onClick={onBoxClick}
    >
      Table{value}
    </button>
  );
}

// <button className={"table-buttons invisible"} onClick={onBoxClick}>
//   Table{value}
// </button>

function Table() {
  //const [tables, setTables] = useState([]);
  let tables = [];
  let numOfRow = 6;
  let numOfColumn = 5;
  let numOfRowCol = numOfRow * numOfColumn;

  for (let i = 1; i <= numOfRowCol; i++) {
    tables.push(<Box key={i} value={i} />);
  }

  // function handleButtonClick(e) {
  //   console.log("clicked");
  //   }

  const [boxes /*setBoxes*/] = useState(Array(numOfRowCol).fill());

  const [timeInput, setTimeInput] = useState({
    id: Math.random(),
    hour: "",
    minute: "",
    second: "",
  });

  const [updateTime, setUpdateTime] = useState();

  function onClickHandler() {
    // return <Box className={data} />;
    console.log("clicked");
  }

  const row = (row) => (
    <tr key={row}>
      {[...Array(numOfRow).keys()].map((column) => (
        <td key={column}>
          <Box value={""} onBoxClick={() => onClickHandler()} />
        </td>
      ))}
    </tr>
  );

  return (
    <>
      <table>
        <tbody>
          <td>
            {[...Array(numOfColumn).keys(tables)].map(row)}
          </td>
          
        </tbody>
      </table>
    </>
  );
}

export default Table;
