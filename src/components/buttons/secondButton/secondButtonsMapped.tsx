import { SecondButton } from './secondButton';
import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';

interface SecondButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
  isKeyBet?: boolean;
}

export const SecondButtons = ({
  activeButtons,
  handler,
  isKeyBet,
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
        <div className="firstButtons">
          {BUTTON_NUMBERS.map((number) => {
            return (
              <SecondButton
                key={number}
                secondButtons={activeButtons}
                number={number}
                row="second"
                handler={handler}
                isKeyBet
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
