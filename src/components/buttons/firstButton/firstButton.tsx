interface FirstButtonProps {
  number: number;
  row: string;
  firstButtons: number[];
  handler: (number: number) => void;
  isKeyBet?: boolean;
}

export const FirstButton = ({
  number,
  row,
  firstButtons,
  handler,
  isKeyBet,
}: FirstButtonProps) => {
  return (
    <div className="button">
      <button
        className={`button-tag ${
          firstButtons.includes(number) && 'button-active-first'
        } ${
          firstButtons.includes(number) && isKeyBet && 'button-active-first-alt'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
