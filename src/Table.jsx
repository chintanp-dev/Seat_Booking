import { useState } from "react";
import "./Table.css";

function Box({ value, onBoxClick }) {
  return (
    <button className="table-buttons" onClick={onBoxClick}>
      Table{value}
    </button>
  );
}

function Table() {
//   let num = 6;

  const [boxes, setBoxes] = useState(Array(30).fill());

  function onClickHandler(i) {
    console.log("Clicked!");
  }

  const row = (row) => (
    <tr key={row}>
      {[...Array(6).keys()].map((column) => (
        <td key={column}>
          <Box
            value={boxes[row * 6 + column]}
            onBoxClick={() => onClickHandler(row * 6 + column)}
          />
        </td>
      ))}
    </tr>
  );

  return (
    <>
      <table>
        <tbody>{[...Array(5).keys()].map(row)}</tbody>
      </table>
    </>
  );
}

export default Table;
