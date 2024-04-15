import { useState, useEffect } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonsContainer from "./ButtonsContainer";
import CountButton from "./CountButton";

const FREE_LIMIT = import.meta.env.VITE_FREE_LIMIT;

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === parseInt(FREE_LIMIT) ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > FREE_LIMIT) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonsContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonsContainer>
    </div>
  );
};

export default Card;
