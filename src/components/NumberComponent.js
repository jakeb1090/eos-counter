import React, { useState, useRef, useEffect } from 'react';
import { NumberInput, Group, ActionIcon, Slider, Switch} from '@mantine/core';
import styled from 'styled-components';

const BillQuantityText = styled.span`
  color: 'teal',
  backgroundColor: 'slateGray'
`;

function NumberComponent(props) {
  let { range, idx, denom, onChange  } = props
  const [quantity, setQuantity] = useState(0);
  const [sum, setSum] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
      denomCalculator()
  }, [quantity])

  useEffect(() => {
      onChange(sum, denom, idx)
  }, [sum])

  const denomCalculator = () => {
    const tempSum = quantity * denom
    setSum(tempSum);
  }
  const handleClick = (e) => {
    const sign = e.target.textContent
    if (sign === '+') setQuantity(prevQuantity => prevQuantity += 1);
    if (sign === '-' && quantity > 0) setQuantity(prevQuantity => prevQuantity -= 1);
    // setQuantity(prevQuantity => prevQuantity -= 1)
  }
  const handleChangeSwitch = (e) => {
    setIsLocked(!isLocked)
    console.log(e.target.checked)
  }
  return (
    <>
      <h1 className="text-yellow-800">HELLO WHATS UP</h1>
      <Slider
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
        onChange={(quant) => setQuantity(quant)}
        value={quantity}
        size={"xl"}
      />
      <Group spacing={5} style={{"marginBottom": "1em"}}>
        <Switch
            label={isLocked ? "Locked" : "Unlocked"}
            color="cyan"
            checked={isLocked}
            onChange={handleChangeSwitch}
        />
        <NumberInput
          hideControls
          value={quantity}
          // onChange={value => setQuantity(value)}
          // handlersRef={handlers}
          onChange={() => console.log('value')}
          max={10}
          min={0}
          step={2}
          styles={{ input: { width: 54, textAlign: 'center' } }}
        />
        <NumberInput
          hideControls
          value={sum}
          disabled={true}
          styles={{ input: { width: 60, textAlign: 'center' } }}
        />
          <ActionIcon size={35} variant="default" onClick={handleClick}>
            -
          </ActionIcon>
          <ActionIcon size={35} variant="default" onClick={handleClick}>
            +
          </ActionIcon>
      </Group>
    </>
  );
}
export default NumberComponent