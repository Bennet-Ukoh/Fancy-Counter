import { ResetIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Resetbutton({ setCount }) {
  const reset = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };
  return (
    <button onClick={reset} className="reset-btn">
      <ResetIcon />
    </button>
  );
}
