import React, { useState } from 'react';

import { FirstButtons } from '../buttons/firstButton/firstButtonsMapped';
import { SecondButtons } from '../buttons/secondButton/secondButtonsMapped';
import { ThirdButtonsMapped } from '../buttons/thirdButton/thirdButtonsMapped';

interface FindTotalTrifectaProps {
  firstPlaceState: number[];
  secondPlaceState: number[];
  thirdPlaceState: number[];
}

export function Trifecta() {
  const [finalTotal, setFinalTotal] = useState<number>(0);
  const [firstPlaceState, setFirstPlaceState] = useState<Array<number>>([]);
  const [secondPlaceState, setSecondPlaceState] = useState<Array<number>>([]);
  const [thirdPlaceState, setThirdPlaceState] = useState<Array<number>>([]);

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

  const handleThird = (num: number) => {
    if (thirdPlaceState.includes(num)) {
      setThirdPlaceState(thirdPlaceState.filter((number) => number !== num));
    } else {
      setThirdPlaceState([...thirdPlaceState, num]);
    }
  };

  const findTotal = ({
    firstPlaceState,
    secondPlaceState,
    thirdPlaceState,
  }: FindTotalTrifectaProps) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        for (const third of thirdPlaceState) {
          if (second !== first && second !== third && first !== third) {
            viablePairings.push(third);
          }
        }
      }
    }

    setFinalTotal(viablePairings.length);
  };

  const resetTotal = () => {
    setFirstPlaceState([]);
    setSecondPlaceState([]);
    setThirdPlaceState([]);
    setFinalTotal(0);
    document
      .querySelectorAll('.button-tag__check')
      .forEach((item) => item.classList.add('hide'));
  };

  return (
    <div>
      <h2 className="header">Trifecta</h2>
      <FirstButtons activeButtons={firstPlaceState} handler={handleFirst} />
      <SecondButtons activeButtons={secondPlaceState} handler={handleSecond} />
      <ThirdButtonsMapped
        activeButtons={thirdPlaceState}
        handler={handleThird}
      />
      <div className="container">
        <h3 className="header">Cost of Wager</h3>
        <div>
          <button
            onClick={() =>
              findTotal({ firstPlaceState, secondPlaceState, thirdPlaceState })
            }
          >
            Calculate
          </button>{' '}
          <button onClick={() => resetTotal()}>Reset</button>
        </div>
        <br />
        <div>{`$${finalTotal}.00`}</div>
        <br />
      </div>
    </div>
  );
}
