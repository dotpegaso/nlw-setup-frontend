import styled, { css } from "styled-components";

interface BoxProps {
  $disabled?: boolean
}

const gridStyle = css`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-auto-flow: column;
  gap: 0.75rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`

export const WeekDays = styled.div`
  ${gridStyle}
`

export const WeekBoxes = styled.div`
  ${gridStyle}
`

export const Day = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: ${props => props.theme.colors.placeholder};
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div<BoxProps>`
  width: 2.5rem;
  height: 2.5rem;
  background: #000;
  border: 2px solid ${props => props.theme.colors.secondaryBlack};
  border-radius: 0.5rem;

  ${props => props.$disabled && `
      opacity: .4;
      pointer-events: none;
  `}
`