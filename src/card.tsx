import Count from "./count";
import ButtonContainer from "./buttonContainer";
import Resetbutton from "./resetbutton";
import Title from "./title";
import React, { useEffect, useState } from "react";
import CountButton from "./countButtons";

export default function Card() {
  const [count, setCount] = useState(0);

  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <Resetbutton setCount={setCount} />
      <ButtonContainer>
        <CountButton locked={locked} type="minus" setCount={setCount} />
        <CountButton locked={locked} type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
