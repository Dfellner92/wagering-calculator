import { Dispatch, SetStateAction } from 'react';
import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';

export interface AllButtonProps {
  selectAll: Dispatch<SetStateAction<number[]>>;
}

export const AllButton = (allButtonProps: AllButtonProps) => {
  const { selectAll } = allButtonProps;

  const selectAllCB = () => selectAll([...BUTTON_NUMBERS]);

  return (
    <div className="button">
      <button
        // className={`button-tag ${
        //   firstButtons.includes(number) && 'button-active-first'
        // } ${
        //   firstButtons.includes(number) && isKeyBet && 'button-active-first-key'
        // }`}
        onClick={selectAllCB}
      >
        All
      </button>
    </div>
  );
};
