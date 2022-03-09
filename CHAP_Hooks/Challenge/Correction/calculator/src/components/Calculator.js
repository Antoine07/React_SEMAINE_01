import { useReducer } from "react";
import Button from "../Styles/Button";

const initialState = {
  numbers: [],
  memory: [],
  message: "",
  total: "",
  type: "",
};

const reducer = (state, action) => {
  let total = 0,
    memory;
  switch (action.type) {
    case "SET_NUMBER":
      return {
        ...state,
        numbers: [...state.numbers, action.number],
      };

    case "SUB":
    case "MULT":
    case "ADD":
      const number = parseInt(state.numbers.join(""));

      // pour le cas où on re-calcule quelque chose après avoir cliqué sur "="
      if (isNaN(number)) {
        memory = [...state.memory];
      } else {
        memory = [...state.memory, parseInt(state.numbers.join(""))];
      }

      return {
        ...state,
        numbers: [],
        memory,
        type: action.type,
      };

    case "RESET":
      return {
        ...state,
        numbers: [],
        memory: [],
        total: "",
      };

    case "TOTAL":
      console.log(state.memory);
      if (state.type === "ADD") {
        total =
          parseInt(state.numbers.join("")) +
          state.memory.reduce((acc, curr) => acc + curr);
      }

      if (state.type === "MULT") {
        total =
          parseInt(state.numbers.join("")) *
          state.memory.reduce((acc, curr) => acc * curr, 1);
      }

      if (state.type === "SUB") {
        total =
          state.memory.reduce((acc, curr) => curr - acc, 0) -
          parseInt(state.numbers.join(""));
      }

      return {
        ...state,
        numbers: [],
        memory: [total],
        total: total,
      };
    default:
      throw new Error();
  }
};

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (number) => {
    dispatch({ type: "SET_NUMBER", number });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      {state.total && <p>{state.total}</p>}
      <p>
        <input
          style={{ height: "30px", width: "300px" }}
          type="text"
          value={state.numbers.join("")}
        />
      </p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, i) => (
        <Button key={i} onClick={() => handleClick(number)}>
          {number}
        </Button>
      ))}
      <div>
        <Button onClick={handleReset}>Reset</Button>

        <Button onClick={() => dispatch({ type: "ADD" })}>+</Button>
        <Button onClick={() => dispatch({ type: "SUB" })}>-</Button>
        <Button onClick={() => dispatch({ type: "MULT" })}>x</Button>
      </div>
      <p>
        {" "}
        <Button onClick={() => dispatch({ type: "TOTAL" })}>=</Button>
      </p>
    </div>
  );
}

export default Calculator;
