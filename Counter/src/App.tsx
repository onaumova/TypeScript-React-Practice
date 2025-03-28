import { useState } from "react";

// This is a warm up question to help you
// get familiar with the editor.
// Most of the code has been filled in for you.
export default function App() {
  const [count, setCount] = useState<number>(0);
  // TODO Make the text within the button display the number of times the button has been clicked.
  return (
    <div>
      <button
        onClick={() => {
          // Fix the bug in the next line
          // to complete the question.
          setCount(count + 1);
        }}
      >
        Clicks: {count}
      </button>
    </div>
  );
}
