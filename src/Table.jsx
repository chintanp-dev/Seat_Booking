import { useRef, useState } from "react";
import "./Table.css";

function Box({ value, onBoxClick, className }) {
  // const [visible, invisible] = useState();

  return (
    <button
      className={` ${className ? "invisible" : "table-buttons"}`}
      onClick={onBoxClick}
    >
      Table{value}
    </button>
  );
}

function Table() {
  //const [tables, setTables] = useState([]);
  let tables = [];
  let numOfRow = 6;
  let numOfColumn = 5;
  let numOfRowCol = numOfRow * numOfColumn;

  let refHour = useRef();
  let refMinute = useRef();
  let refSecond = useRef();

  const handleInputChange = (event) => {
    event.preventDefault();
    refHour.current.value = "";
    refMinute.current.value = "";
    refSecond.current.value = "";
  };

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
    <table key={Math.random()}>
      <tbody>
        <tr key={row}>
          {[...Array(numOfRow).keys()].map((column) => (
            <td key={column}>
              <Box value={""} onBoxClick={() => onClickHandler()} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );

  return (
    <>
      <form action="" className="center" onSubmit={handleInputChange}>
        Book For
        <input
          className="time-input"
          type="number"
          placeholder="hour"
          name="hour"
          ref={refHour}
        />
        <input
          className="time-input"
          type="number"
          placeholder="minute"
          name="minute"
          ref={refMinute}
        />
        <input
          className="time-input"
          type="number"
          placeholder="second"
          name="second"
          ref={refSecond}
        />
        <button type="submit" style={{ width: "3.5rem" }}>
          Book
        </button>
      </form>

      <table>
        <tbody>
          <tr>
            <td>{[...Array(numOfColumn).keys()].map(row)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;

// const FilteredList = () => {
//  const [query, setQuery] = useState('');
//  const [list, setList] = useState([]);

//  const handleInputChange = (event) => {
//     setQuery(event.target.value);
//  };

//  const filteredList = list.filter((item) => {
//     return item.toLowerCase().includes(query.toLowerCase());
//  });

//  return (
//     <div>
//       <input type="text" placeholder="Search" value={query} onChange={handleInputChange} />
//       <ul>
//         {filteredList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//  );
// };

// export default FilteredList;
