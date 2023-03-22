import { BUTTON_NUMBERS } from '../../../util/buttonNumbers';
import { ThirdButton } from './thirdButton';

interface ThirdButtonsMappedProps {
  activeButtons: number[];
  handler: (number: number) => void;
}

export const ThirdButtonsMapped = ({
  activeButtons,
  handler,
}: ThirdButtonsMappedProps) => {
  return (
    <div className="container">
      <h3 className="header">Third Place</h3>
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
              <ThirdButton
                key={number}
                thirdButtons={activeButtons}
                number={number}
                row="third"
                handler={handler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
