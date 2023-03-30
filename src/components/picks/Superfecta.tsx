import React, { useState } from 'react';

import { FirstButtons } from '../buttons/firstButton/firstButtonsMapped';
import { SecondButtons } from '../buttons/secondButton/secondButtonsMapped';
import { ThirdButtonsMapped } from '../buttons/thirdButton/thirdButtonsMapped';
import { FourthButtonsMapped } from '../buttons/fourthButton/fourthButtonsMapped';

interface FindTotalSuperfectaProps {
  firstPlaceState: number[];
  secondPlaceState: number[];
  thirdPlaceState: number[];
  fourthPlaceState: number[];
}

export const Superfecta = () => {
  const [finalTotal, setFinalTotal] = useState<number>(0);
  const [firstPlaceState, setFirstPlaceState] = useState<Array<number>>([]);
  const [secondPlaceState, setSecondPlaceState] = useState<Array<number>>([]);
  const [thirdPlaceState, setThirdPlaceState] = useState<Array<number>>([]);
  const [fourthPlaceState, setFourthPlaceState] = useState<Array<number>>([]);

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

  const handleFourth = (num: number) => {
    if (fourthPlaceState.includes(num)) {
      setFourthPlaceState(fourthPlaceState.filter((number) => number !== num));
    } else {
      setFourthPlaceState([...fourthPlaceState, num]);
    }
  };
  const findTotal = ({
    firstPlaceState,
    secondPlaceState,
    thirdPlaceState,
    fourthPlaceState,
  }: FindTotalSuperfectaProps) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        for (const third of thirdPlaceState) {
          for (const fourth of fourthPlaceState) {
            if (
              second !== first &&
              second !== third &&
              first !== third &&
              first !== fourth &&
              second !== fourth &&
              third !== fourth
            ) {
              viablePairings.push(fourth);
            }
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
    setFourthPlaceState([]);
    setFinalTotal(0);
    document
      .querySelectorAll('.button-tag__check')
      .forEach((item) => item.classList.add('hide'));
  };

  return (
    <div>
      <h2 className="header">Superfecta</h2>
      <FirstButtons activeButtons={firstPlaceState} handler={handleFirst} />
      <SecondButtons activeButtons={secondPlaceState} handler={handleSecond} />
      <ThirdButtonsMapped
        activeButtons={thirdPlaceState}
        handler={handleThird}
      />
      <FourthButtonsMapped
        activeButtons={fourthPlaceState}
        handler={handleFourth}
      />
      <div className="container">
        <h3 className="header">Cost of Wager</h3>
        <div>
          <button
            onClick={() =>
              findTotal({
                firstPlaceState,
                secondPlaceState,
                thirdPlaceState,
                fourthPlaceState,
              })
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
};

export default Superfecta;
