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
      <button
        className={`button-tag ${
          firstButtons.includes(number) && 'button-active-first'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
