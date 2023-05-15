import { SecondButton } from './secondButton';
import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';
import { Dispatch, SetStateAction } from 'react';
import { AllButton } from '../allButton/allButton';

interface SecondButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
  isKeyBet?: boolean;
  selectAll?: Dispatch<SetStateAction<number[]>>;
}

export const SecondButtons = ({
  activeButtons,
  handler,
  isKeyBet,
  selectAll,
}: SecondButtonsMappedProps) => {
  return (
    <div className="container">
      <h3 className="header">Second Place</h3>
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
              <SecondButton
                key={number}
                secondButtons={activeButtons}
                number={number}
                row="second"
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
