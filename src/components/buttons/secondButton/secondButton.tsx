interface SecondButtonProps {
  number: number;
  row: string;
  secondButtons: number[];
  handler: (number: number) => void;
}

export const SecondButton = ({
  number,
  row,
  secondButtons,
  handler,
}: SecondButtonProps) => {
  return (
    <div className="button">
      <button className="button-tag" onClick={() => handler(number)}>
        {number}
      </button>
      {secondButtons.includes(number) ? (
        <img
          id={`check-${row}-${number}`}
          className="button-tag__check"
          src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
          alt="check first one"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
