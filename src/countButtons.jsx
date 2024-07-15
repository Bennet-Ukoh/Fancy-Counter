import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ locked, type, setCount }) {
  const handleClick = (event) => {
    setCount((prev) =>
      type === "plus" ? (prev === 5 ? 5 : prev + 1) : prev > 0 ? prev - 1 : 0
    );
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
