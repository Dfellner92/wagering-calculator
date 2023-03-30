interface FourthButtonProps {
  number: number;
  row: string;
  fourthButtons: number[];
  handler: (number: number) => void;
}

export const FourthButton = ({
  number,
  row,
  fourthButtons,
  handler,
}: FourthButtonProps) => {
  return (
    <div className="button">
      <button
        className={`button-tag ${
          fourthButtons.includes(number) && 'button-active-fourth'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
