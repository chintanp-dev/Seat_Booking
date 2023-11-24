import { useState } from "react";
import "./Table.css";

function Table() {
  //   let num = 6;

  //   const [boxes, setBoxes] = useState(Array().fill());

  //   function onClickHandler(i) {}

  //   const row = (row) => (
  //     <tr key={row}>
  //       {[...Array(num).keys()].map((column) => (
  //         <td key={column}>
  //           <Box
  //             value={boxes[row * num + column]}
  //             onBoxClick={() => onClickHandler(row * num + column)}
  //           />
  //         </td>
  //       ))}
  //     </tr>
  //   );

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
          </tr>
          <tr>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
          </tr>
          <tr>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
          </tr>
          <tr>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
          </tr>
          <tr>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
            <td><button className="table-buttons">Table</button></td>
          </tr>
 
         
        </tbody>
      </table>
    </>
  );
}

export default Table;
