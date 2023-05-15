import { FirstButton } from './firstButton';
import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';
import { AllButton } from '../allButton/allButton';
import { Dispatch, SetStateAction } from 'react';

interface FirstButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
  isKeyBet?: boolean;
  selectAll?: Dispatch<SetStateAction<number[]>>;
}

export const FirstButtons = ({
  activeButtons,
  handler,
  isKeyBet,
  selectAll,
}: FirstButtonsMappedProps) => {
  return (
    <div className="container">
      <h3 className="header">First Place</h3>
      <div
        className={
          activeButtons.length
            ? 'buttons-wrapper'
            : 'buttons-wrapper-with-margin'
        }
      >
        <AllButton
          selectAll={selectAll as Dispatch<SetStateAction<number[]>>}
        />
        <div className="firstButtons">
          {BUTTON_NUMBERS.map((number) => {
            return (
              <FirstButton
                key={number}
                firstButtons={activeButtons}
                number={number}
                row="first"
                handler={handler}
                isKeyBet={isKeyBet}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
