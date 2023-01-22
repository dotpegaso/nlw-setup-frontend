import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Text = styled.h1`
  color: ${props => props.theme.colors.white};
`