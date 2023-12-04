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

function CountDownTimer() {

  let refHour = useRef();
  let refMinute = useRef();
  let refSecond = useRef();
  const timerIdRef = useRef(null);


  const numOfRow = 5;
  const numOfColumn = 6;
  const numOfRowCol = numOfRow * numOfColumn;


  const [inputValue, setInputValue] = useState({
    hour: "",
    minute: "",
    second: "",
  });


  const [boxStates, setBoxStates] = useState(Array(numOfRowCol).fill(false));
  const [showCountdownTimer, setShowCountdownTimer] = useState(false);
  const [countdownPosition, setCountdownPosition] = useState({
    left: 0,
    top: 0,
  });


  const onBoxClick = (index, event) => {

    setBoxStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

    // for Positioning of inputs
    const buttonRect = event.target.getBoundingClientRect();
    setCountdownPosition({
      left: buttonRect.left,
      top: buttonRect.top + buttonRect.height,
    });

    setShowCountdownTimer(true);
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


  // const [boxStates, setBoxStates] = useState(Array(numOfRowCol).fill(false));

  // const onBoxClickState = (index) => {
  //   setBoxStates((prevStates) => {
  //     const newStates = [...prevStates];
  //     newStates[index] = !newStates[index];
  //     return newStates;
  //   });
  // };

  return (
    <>
      {showCountdownTimer && (
        <div
          className="countdown-timer-input"
          style={{
            position: "absolute",
            left: countdownPosition.left,
            top: countdownPosition.top,
          }}
        >
          {/* <div>
            <span id="hour">{inputValue.hour}</span> :
            <span id="minute"> {inputValue.minute}</span> :
            <span id="second"> {inputValue.second}</span>
          </div> */}

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
            <button className="book-button" type="submit">
              Book
            </button>
          </form>
        </div>
      )}

      <table>
        <tbody>
          {[...Array(numOfRow).keys()].map((row) => (
            <tr key={row}>
              {[...Array(numOfColumn).keys()].map((column) => {
                const index = row * numOfColumn + column;
                return (
                  <td key={column}>
                    <button
                      className={`table-buttons ${
                        boxStates[index] ? "invisible" : ""
                      }`}
                      onClick={(event) => onBoxClick(index, event)}
                    >
                      Table <br /> {index + 1}
                    </button>
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

export default CountDownTimer;
