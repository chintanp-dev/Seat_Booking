import { useRef, useState, useEffect } from "react";
import "./Table.css";

function Box({ value, onBoxClick, isRed }) {
  return (
    <button
      className={`table-buttons ${isRed ? "red-box" : ""}`}
      onClick={onBoxClick}
    >
      Table{value}
    </button>
  );
}


function Table() {
  //for Timer

  let refHour = useRef();
  let refMinute = useRef();
  let refSecond = useRef();
  const timerIdRef = useRef(null);


  const inputChangeOnBook = (event) => {
    event.preventDefault();
    refHour.current.value = 0;
    refMinute.current.value = 0;
    refSecond.current.value = 0;

    startTimer();
  };


  const [inputValue, setInputValue] = useState({
    hour: "",
    minute: "",
    second: "",
  });


  const onChangeHandler = (event) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setInputValue((prevVal) => ({
        ...prevVal,
        [event.target.name]: value,
      }));
    }
  };


  const startTimer = () => {
    if (!timerIdRef.current) {
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


  const stopTimer = () => {
    clearInterval(timerIdRef.current);
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);


  // for Box

  const numOfRow = 5;
  const numOfColumn = 6;
  const numOfRowCol = numOfRow * numOfColumn;

  const [boxStates, setBoxStates] = useState(Array(numOfRowCol).fill(false));


  const onBoxClickState = (index) => {
    setBoxStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <div>
        <span id="hour">{inputValue.hour}</span> :
        <span id="minute"> {inputValue.minute}</span> :
        <span id="second"> {inputValue.second}</span>
      </div>

      <form action="" className="center" onSubmit={inputChangeOnBook}>
        Book For
        <input
          className="time-input"
          type="number"
          placeholder="hour"
          name="hour"
          value={inputValue.hour}
          ref={refHour}
          onChange={onChangeHandler}
          max={23}
        />
        <input
          className="time-input"
          type="number"
          placeholder="minute"
          name="minute"
          value={inputValue.minute}
          ref={refMinute}
          onChange={onChangeHandler}
          max={59}
        />
        <input
          className="time-input"
          type="number"
          placeholder="second"
          name="second"
          value={inputValue.second}
          ref={refSecond}
          onChange={onChangeHandler}
          max={59}
        />
        <button type="submit" style={{ width: "3.5rem" }}>
          Book
        </button>
      </form>

      <table>
        <tbody>
          {[...Array(numOfRow).keys()].map((row) => (
            <tr key={row}>
              {[...Array(numOfColumn).keys()].map((column) => {
                const index = row * numOfColumn + column;
                return (
                  <td key={column}>
                    <Box
                      key={index}
                      value={index + 1}
                      isRed={boxStates[index]}
                      onBoxClick={() => onBoxClickState(index)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
