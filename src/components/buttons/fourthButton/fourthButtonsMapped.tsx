import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';
import { FourthButton } from './fourthButton';

interface FourthButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
}

export const FourthButtonsMapped = ({
  activeButtons,
  handler,
}: FourthButtonsMappedProps) => {
  return (
    <div className="container">
      <h3 className="header">Fourth Place</h3>
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
              <FourthButton
                key={number}
                fourthButtons={activeButtons}
                number={number}
                row="fourth"
                handler={handler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
