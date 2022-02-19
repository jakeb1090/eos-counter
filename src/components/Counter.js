import React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import NumberComponent from './NumberComponent';
import { NumberInput, RingProgress, Text, Tabs, Center, ThemeIcon} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoins, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: teal;
  border: 1px solid gray;
`;

const ToggleBills = styled.div`
  display: ${props => props.toggle ? 'block': 'none'}
`;

const ToggleCoins = styled.div`
  display: ${props => !props.toggle ? 'block': 'none'}
`;

const Switch = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2em;
  justify-content: space-around;
  ${'' /* border: 1px solid white; */}
  ${'' /* align-items: space-around; */}
`;

const Counter = () => {
  // each index is a specific currency denomination
  const [totalBills, setTotalBills] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [totalCoins, setTotalCoins] = useState([0, 0, 0, 0, 0]);
  const [totalCash, setTotalCash] = useState(0);
  const [target, setTarget] = useState(1110)
  const [toggle, setToggle] =  useState(true)

  useEffect(() => {
    let reduced = totalBills.reduce((acc, num) => acc + num);
    setTotalCash(reduced)
  }, [totalBills])

  let handleChange = (sum, denom, idx) => {
    let tempArray = totalBills.slice()
    tempArray[Number(idx)] = Number(sum)
    setTotalBills(tempArray)
  }

  let handleToggle = () => {
    setToggle(!toggle)
  }

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
          DIFFERENCE: {(target - totalCash).toFixed(2)}<br />
        </div>

        { target !== totalCash ?
        (<div>
          <RingProgress
            sections={[{ value: (totalCash / target) * 100, color: 'violet' }]}
            label={
              <Text color="pink" weight={700} align="center" size="150">
                {totalCash}
              </Text>
            }
          />
        </div>
        ) : (
        <div>
        <RingProgress
          sections={[{ value: 100, color: 'teal' }]}
          label={
            <Center>
              <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
                <FontAwesomeIcon icon={faCheck} color="white" className="fa-2x fa-beat fa-solid" />
              </ThemeIcon>
            </Center>
          }
        />
        </div>
        )}

      </HeaderContainer>

      <Switch onClick={handleToggle}>
        <FontAwesomeIcon icon={faMoneyBill1Wave} color={toggle ? "lightGreen" : "yello"} className="fa-3x"/>
        <FontAwesomeIcon icon={faCoins} color={toggle ? "gray" : "yellow"} className="fa-3x" />
      </Switch>

        <ToggleBills toggle={toggle}>
          <div className="input-group-bills">
            ONE<NumberComponent idx="0" range={100} denom={1} onChange={handleChange} value={totalBills[0]}/>
            FIVE<NumberComponent idx="1" range={100} denom={5} onChange={handleChange} value={totalBills[1]} />
            TEN<NumberComponent idx="2" range={100} denom={10} onChange={handleChange} value={totalBills[2]} />
            TWENTY<NumberComponent idx="3" range={120} denom={20} onChange={handleChange} value={totalBills[2]}/>
            FIFTY<NumberComponent idx="4" range={50} denom={50} onChange={handleChange} value={totalBills[2]}/>
            HUNDRED<NumberComponent idx="5" range={50} denom={100} onChange={handleChange} value={totalBills[2]}/>
          </div>
        </ToggleBills>

        <ToggleCoins toggle={toggle}>
        <div className="input-group-coins">
          PENNY<NumberComponent idx="6" range={100} denom={.01} onChange={handleChange} value={totalBills[6]}/>
          NICKEL<NumberComponent idx="7" range={100} denom={.05} onChange={handleChange} value={totalBills[7]}/>
          DIME<NumberComponent idx="8" range={100} denom={.1} onChange={handleChange} value={totalBills[8]}/>
          QUARTER<NumberComponent idx="9" range={100} denom={.25} onChange={handleChange} value={totalBills[9]}/>
        </div>
        </ToggleCoins>
    </>
  )
}

export default Counter