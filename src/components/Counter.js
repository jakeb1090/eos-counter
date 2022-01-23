import React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import NumberComponent from './NumberComponent';
import { NumberInput, RingProgress, Text } from '@mantine/core';

// import e from 'express';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: teal;
  border: 1px solid gray;
`;

const Counter = () => {
  const [totalBills, setTotalBills] = useState([0, 0, 0, 0, 0]);
  const [totalCoins, setTotalCoins] = useState([0, 0, 0, 0, 0]);
  const [totalCash, setTotalCash] = useState(0);
  const [target, setTarget] = useState(0)

  useEffect(() => {
    let reduced = totalBills.reduce((acc, num) => acc + num);
    setTotalCash(reduced)
  }, [totalBills])

  let handleChange = (sum, denom, idx) => {
    let tempArray = totalBills.slice()
    tempArray[Number(idx)] = sum
    setTotalBills(tempArray)
  }

  const percent = (totalCash / target).toFixed(1);

  return (
    <>
      <HeaderContainer>
        <NumberInput
          hideControls
          value={target}
          onChange={(value) => setTarget(value)}
          styles={{ input: { width: 64, textAlign: 'center' } }}
        />
        <div>
          TARGET: { target }<br />
          TOTAL: {totalCash}<br />
          DIFFERENCE: {target-totalCash}<br />
        </div>
        <div>
          <RingProgress
            sections={[{ value: {percent}, color: 'blue' }]}
            label={
              <Text color="blue" weight={700} align="center" size="xl">
                {totalCash}
              </Text>
            }
          />
        </div>
      </HeaderContainer>


      <div className="input-group">
        ONE<NumberComponent idx="0" range={100} denom={1} onChange={handleChange}/>
        FIVE<NumberComponent idx="1" range={100} denom={5} onChange={handleChange}/>
        TEN<NumberComponent idx="2" range={100} denom={10} onChange={handleChange}/>
        TWENTY<NumberComponent idx="3" range={120} denom={20} onChange={handleChange}/>
        FIFTY<NumberComponent idx="4" range={50} denom={50} onChange={handleChange}/>
        HUNDRED<NumberComponent idx="5" range={50} denom={100} onChange={handleChange}/>

        PENNY<NumberComponent name="1" range={100} denom={.01} onChange={handleChange}/>
        NICKEL<NumberComponent name="5" range={100} denom={.05} onChange={handleChange}/>
        DIME<NumberComponent name="20" range={100} denom={.1} onChange={handleChange}/>
        QUARTER<NumberComponent name="50" range={100} denom={.25} onChange={handleChange}/>
      </div>
    </>
  )
}

export default Counter