interface FirstButtonProps {
  number: number;
  row: string;
  firstButtons: number[];
  handler: (number: number) => void;
}

export const FirstButton = ({
  number,
  row,
  firstButtons,
  handler,
}: FirstButtonProps) => {
  return (
    <div className="button">
      <button className="button-tag" onClick={() => handler(number)}>
        {number}
      </button>
      {firstButtons.includes(number) ? (
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
