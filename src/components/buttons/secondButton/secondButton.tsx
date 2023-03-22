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
      <button
        className={`button-tag ${
          secondButtons.includes(number) && 'button-active-second'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
