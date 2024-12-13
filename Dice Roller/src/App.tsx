import { useState } from "react";
import "./App.css";

/* Build a dice roller app that simulates the results of rolling 
a specified number of 6-sided dice.

Requirements
The user can specify the number of dice to roll using the input field 
and the value can be an integer 
between 1 to 12 inclusive.
Upon clicking the "Roll" button, the dice roll is simulated and 
the results are displayed.
The results of the dice roll should be displayed in rows of three.
The example below shows a potential result of rolling 6 dice.
*/
interface DicePosition {
  [count: number]: string[];
}
const DICE_FACE_DOT_POSITIONS: DicePosition = {
  1: ["dot--center"],
  2: ["dot--top-right", "dot--bottom-left"],
  3: ["dot--top-right", "dot--center", "dot--bottom-left"],
  4: [
    "dot--top-left",
    "dot--top-right",
    "dot--bottom-left",
    "dot--bottom-right",
  ],
  5: [
    "dot--top-left",
    "dot--top-right",
    "dot--center",
    "dot--bottom-left",
    "dot--bottom-right",
  ],
  6: [
    "dot--top-left",
    "dot--top-right",
    "dot--center-left",
    "dot--center-right",
    "dot--bottom-left",
    "dot--bottom-right",
  ],
};

export default function App() {
  const [diceList, setDiceList] = useState<number[][]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("val", (e.target as HTMLFormElement).value);
    const data = new FormData(e.target as HTMLFormElement);
    const currNumber = data.get("diceNumber") as number;
    const rolledDice = [];
    let row: number[] = [];
    for (let i = 0; i < currNumber; i++) {
      let dice = Math.ceil(Math.random() * 6) || 1;
      row.push(dice);
      if (row.length === 3 || i === currNumber - 1) {
        rolledDice.push(row);
        row = [];
      }
    }
    setDiceList(rolledDice);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="diceNumber"> Number of dice: </label>
          <input
            id="diceNumber"
            name="diceNumber"
            type="number"
            step={1}
            min={1}
            max={12}
            required
          />
        </div>
        <button type="submit">Roll</button>
      </form>
      <RolledDice diceList={diceList} />
    </div>
  );
}

interface RolledDiceProps {
  diceList: number[][];
}
function RolledDice({ diceList }: RolledDiceProps) {
  return diceList.map((row, i) => {
    return (
      <div key={i} className="row">
        {row.map((dice, i) => (
          <Dice key={i} dice={dice} />
        ))}
      </div>
    );
  });
}

function Dice({ dice }: { dice: number }) {
  return (
    <div className="dice">
      <div className="dots">
        {DICE_FACE_DOT_POSITIONS[dice].map((dotClass, i) => {
          return <div key={i} className={`dot ${dotClass}`}></div>;
        })}
      </div>
    </div>
  );
}
