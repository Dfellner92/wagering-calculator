import { FirstButton } from './firstButton';
import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';

interface FirstButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
}

export const FirstButtons = ({
  activeButtons,
  handler,
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
        <div className="firstButtons">
          {BUTTON_NUMBERS.map((number) => {
            return (
              <FirstButton
                key={number}
                firstButtons={activeButtons}
                number={number}
                row="first"
                handler={handler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
