import { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import "./CountDownTimer.css";

function CountDownTimer({ onTimerComplete }) {

  const [showInputFields, setShowInputFields] = useState(true);
  const [inputValue, setInputValue] = useState({
    hour: "",
    minute: "",
    second: "",
  });


  const timerIdRef = useRef(null);


  const startTimer = () => {

    if (!timerIdRef.current) {

      setShowInputFields(false);

      timerIdRef.current = setInterval(() => {

        setInputValue((prevValues) => {

          let { hour, minute, second } = prevValues;

          let totalSeconds = hour * 3600 + minute * 60 + second;

          if (totalSeconds > 0) {
            totalSeconds -= 1;

            hour = Math.floor(totalSeconds / 3600);
            minute = Math.floor((totalSeconds % 3600) / 60);
            second = totalSeconds % 60;
          } else {
            stopTimer();
          }
          return { hour, minute, second };
        });
      }, 1000);
    }
  };

  
  const inputChangeOnBook = (event) => {
    event.preventDefault();

    // setBoxStates((prevStates) => {
    //   const newStates = [...prevStates];
    //   newStates[index] = !newStates[index];
    //   return newStates;
    // });

    startTimer();
  };


  const onChangeHandler = (event) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setInputValue((prevVal) => ({
        ...prevVal,
        [event.target.name]: value,
      }));
    }
  };


  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    onTimerComplete();
  };
  

  // useEffect(() => {
  //   return () => {
  // stopTimer();
  // onTimerComplete()
  //   };
  // }, []);

  console.log(
    inputValue.hour + ":" + inputValue.minute + ":" + inputValue.second
  );


  return (
    <>
      <form action="" className="center" onSubmit={inputChangeOnBook}>
        <div className={`input-fields ${showInputFields ? "" : "booked"}`}>
          Book For
          <input
            className="time-input"
            type="number"
            placeholder="hour"
            name="hour"
            value={inputValue.hour}
            // ref={refHour}
            onChange={onChangeHandler}
            max={23}
          />

          <input
            className="time-input"
            type="number"
            placeholder="minute"
            name="minute"
            value={inputValue.minute}
            // ref={refMinute}
            onChange={onChangeHandler}
            max={59}
          />

          <input
            className="time-input"
            type="number"
            placeholder="second"
            name="second"
            value={inputValue.second}
            // ref={refSecond}
            onChange={onChangeHandler}
            max={59}
          />

          <button className="book-button" type="submit">
            Book
          </button>
        </div>
      </form>
    </>
  );
}


function TableButtons({
  index,
  boxStates,
  onBoxClick,
  onTimerComplete,
  mergedTables,
}) {
  const isMerged = mergedTables.includes(index);
  const hasActiveTimer = boxStates[index];

  return (
    <td>
      <button
        className={`table-buttons ${boxStates[index] ? "invisible" : ""} ${
          isMerged ? "merged" : ""
        }`}
        onClick={() => onBoxClick(index)}
        style={{ backgroundColor: isMerged && !hasActiveTimer ? "blue" : "" }}
      >
        Table <br /> {index + 1}
      </button>
      {boxStates[index] && (
        <CountDownTimer onTimerComplete={() => onTimerComplete(index)} />
      )}
    </td>
  );
}


function TableBox() {

  const numOfRow = 5;
  const numOfColumn = 7;


  const [boxStates, setBoxStates] = useState(
    Array(numOfRow * numOfColumn).fill(false)
  );


  const [mergedTables, setMergedTables] = useState([]);

  const onBoxClick = (index) => {
    setBoxStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };


  const onTimerComplete = (index) => {
    setBoxStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };


  const handleMerge = () => {
    const inputValues = document.querySelector(".main-input").value;
    const tablesToMerge = inputValues
      .split(",")
      .map((table) => parseInt(table, 10) - 1);

    const validTablesToMerge = tablesToMerge.filter((table) => {
      const isAdjacent =
        mergedTables.includes(table - 1) || mergedTables.includes(table + 1);
      const hasActiveTimer = boxStates[table];
      return isAdjacent || hasActiveTimer;
    });

    setMergedTables([...mergedTables, ...validTablesToMerge]);
  };


  const TableRow = () => {
    return [...Array(numOfRow).keys()].map((row) => (
      <tr key={row}>{TableColumns(row)}</tr>
    ));
  };


  const TableColumns = (row) => {
    return [...Array(numOfColumn).keys()].map((column) => {
      const index = row * numOfColumn + column;
      return (
        <TableButtons
          key={column}
          index={index}
          boxStates={boxStates}
          onBoxClick={onBoxClick}
          onTimerComplete={onTimerComplete}
          mergedTables={mergedTables}
        />
      );
    });
  };
  

  return (
    <>
      <SearchBar onMerge={handleMerge} />
      <table>
        <tbody>{TableRow()}</tbody>
      </table>
    </>
  );
}

export default TableBox;
