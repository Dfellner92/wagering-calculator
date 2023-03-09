import { useState } from 'react';

import { FirstButtons } from '../buttons/firstButton/firstButtonsMapped';
import { SecondButtons } from '../buttons/secondButton/secondButtonsMapped';

interface FindTotalProps {
  firstPlaceState: number[];
  secondPlaceState: number[];
}

export function Exacta() {
  const [finalTotal, setFinalTotal] = useState<number>(0);
  const [firstPlaceState, setFirstPlaceState] = useState<Array<number>>([]);
  const [secondPlaceState, setSecondPlaceState] = useState<Array<number>>([]);

  const handleFirst = (num: number) => {
    if (firstPlaceState.includes(num)) {
      setFirstPlaceState(firstPlaceState.filter((number) => number !== num));
    } else {
      setFirstPlaceState([...firstPlaceState, num]);
    }
  };

  const handleSecond = (num: number) => {
    if (secondPlaceState.includes(num)) {
      setSecondPlaceState(secondPlaceState.filter((number) => number !== num));
    } else {
      setSecondPlaceState([...secondPlaceState, num]);
    }
  };

  const findTotal = ({ firstPlaceState, secondPlaceState }: FindTotalProps) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        if (second !== first) {
          viablePairings.push(second);
        }
      }
    }

    setFinalTotal(viablePairings.length);
  };

  const resetTotal = () => {
    setFirstPlaceState([]);
    setSecondPlaceState([]);
    setFinalTotal(0);
    document
      .querySelectorAll('.button-tag__check')
      .forEach((item) => item.classList.add('hide'));
  };

  return (
    <>
      <h2 className="header">Exacta</h2>
      <FirstButtons activeButtons={firstPlaceState} handler={handleFirst} />
      <SecondButtons activeButtons={secondPlaceState} handler={handleSecond} />
      <div className="container">
        <h3 className="header">Cost of Wager</h3>
        <div>
          <button
            onClick={() => findTotal({ firstPlaceState, secondPlaceState })}
          >
            Calculate
          </button>{' '}
          <button onClick={() => resetTotal()}>Reset</button>
        </div>
        <br />
        <div>{`$${finalTotal}.00`}</div>
        <br />
      </div>
    </>
  );
}
