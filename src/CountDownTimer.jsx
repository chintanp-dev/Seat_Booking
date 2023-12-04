import { useRef, useState, useEffect } from "react";
import "./CountDownTimer.css";

// function Box({ value, onBoxClick, isInvisible }) {
//   return (
//     <button
//       className={`table-buttons ${isInvisible ? "invisible" : ""}`}
//       onClick={onBoxClick}
//     >
//        <b>Table <br /> {value}</b>
//     </button>
//   );
// }


function CountDownTimer({onTimerComplete}) {

  const [inputValue, setInputValue] = useState({
    hour: "",
    minute: "",
    second: "",
  });


  // let refHour = useRef();
  // let refMinute = useRef();
  // let refSecond = useRef();
  const timerIdRef = useRef(null);


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


  const inputChangeOnBook = (event) => {
    event.preventDefault();
    // refHour.current.value = 0;
    // refMinute.current.value = 0;
    // refSecond.current.value = 0;

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
    onTimerComplete()
  };


  // useEffect(() => {
  //   return () => {
  // stopTimer();
  // onTimerComplete()
  //   };
  // }, []);


  return (
    <>
      <div className="countdown-timer-input">

        <form action="" className="center" onSubmit={inputChangeOnBook}>
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

        </form>
      </div>
    </>
  );
}

function TableButtons({ index, boxStates, onBoxClick, onTimerComplete }) {
  return (
    <td>
      <button
        className={`table-buttons ${boxStates[index] ? "invisible" : ""}`}
        onClick={() => onBoxClick(index)}
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
    const numOfColumn = 6;
  
    const [boxStates, setBoxStates] = useState(Array(numOfRow * numOfColumn).fill(false));
  
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
  
    const TableRow = () => {
      return [...Array(numOfRow).keys()].map((row) => (
        <tr key={row}>
          {TableColumns(row)}
        </tr>
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
          />
        );
      });
    };
  
    return (
      <>
        <table>
          <tbody>
            {TableRow()}
          </tbody>
        </table>
      </>
    );
  }
  
  export default TableBox;


