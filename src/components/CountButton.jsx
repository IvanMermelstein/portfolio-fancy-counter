import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const FREE_LIMIT = import.meta.env.VITE_FREE_LIMIT;

const CountButton = ({ type, setCount, locked }) => {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > FREE_LIMIT) return FREE_LIMIT;
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button
      className={`count-btn ${locked ? "count-btn--limit" : ""}`}
      onClick={handleClick}
      disabled={locked}
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
