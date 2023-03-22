interface ThirdButtonProps {
  number: number;
  row: string;
  thirdButtons: number[];
  handler: (number: number) => void;
}

export const ThirdButton = ({
  number,
  row,
  thirdButtons,
  handler,
}: ThirdButtonProps) => {
  return (
    <div className="button">
      <button
        className={`button-tag ${
          thirdButtons.includes(number) && 'button-active-third'
        }`}
        onClick={() => handler(number)}
      >
        {number}
      </button>
    </div>
  );
};
