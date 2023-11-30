import { useRef, useState, useEffect } from "react";
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

  const inputChangeOnBook = (event) => {
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

  // const [boxes /*setBoxes*/] = useState(Array(numOfRowCol).fill());

  const [timeInput, setTimeInput] = useState({
    id: Math.random(),
    hour: "",
    minute: "",
    second: "",
  });

  // const [updateTime, setUpdateTime] = useState();

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

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(5);

  let timerId = null;

  const startTimer = () => {
    if (!timerId) {
      timerId = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond > 0) {
            return prevSecond - 1;
          } else {
            setSecond(59);
            setMinute((prevMinute) => {
              if (prevMinute > 0) {
                return prevMinute - 1;
              } else {
                setMinute(59);
                setHour(
                  (prevHour) => (
                    prevHour > 0 ? prevHour - 1 : setSecond(0),
                    setMinute(0),
                    setHour(0)
                  )
                );
              }
              return prevMinute;
            });
          }
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    timerId = null;
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  //-------------------------------------------------------------------------

  // only one for Second

  // const [second, setSecond] = useState(5);
  // let secondId = null;

  // const startSecondTimer = () => {
  //   if (!secondId) {
  //     secondId = setInterval(() => {
  //       setSecond((prevSecond) => {
  //         const newSecond = prevSecond - 1;
  //         if (newSecond <= 0) {
  //           stopSecondTimer();
  //           return 0;
  //         }
  //         return newSecond;
  //       });
  //     }, 1000);
  //   }
  // };

  // const stopSecondTimer = () => {
  //   clearInterval(secondId);
  //   secondId = null;
  // };

  // useEffect(() => {
  //   startSecondTimer();
  //   return () => stopSecondTimer();
  // }, []);

  //-------------------------------------------------------------------------------

  //   let countDownDate = 10

  //   function timer() {
  //     // let now = new Date().getTime();
  //     // console.log(countDownDate, now );
  //     let distance = countDownDate -1

  //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // console.log(hours + "h" + minutes + "m" + seconds + "s");
  //     if (distance < 0) {
  //       clearInterval(x);
  //       return
  //     }
  //   }

  //   let x = setInterval(timer, 1000);

  //---------------------------------------------------------------------

  return (
    <>
      <div>
        <span id="hour">{hour}</span> : <span id="minute">{minute}</span> :
        <span id="second"> {second}</span>
      </div>
      {/* <p>  {hours} {minutes} {seconds}</p> */}
      updateTime ? (
      <form action="" className="center" onSubmit={inputChangeOnBook}>
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
      ) : (
      <table>
        <tbody>
          <tr>
            <td>{[...Array(numOfColumn).keys()].map(row)}</td>
          </tr>
        </tbody>
      </table>
      )
    </>
  );
}

export default Table;
