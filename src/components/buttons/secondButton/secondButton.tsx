interface SecondButtonProps {
  number: number;
  row: string;
  secondButtons: number[];
  handler: (number: number) => void;
  isKeyBet?: boolean;
}

export const SecondButton = ({
  number,
  row,
  secondButtons,
  handler,
  isKeyBet,
}: SecondButtonProps) => {
  return (
    <div className="button">
      <button
        className={`button-tag ${
          secondButtons.includes(number) && 'button-active-second'
        } ${
          secondButtons.includes(number) &&
          isKeyBet &&
          'button-active-second-key'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
