import styled from "styled-components";

export const Container = styled.button.attrs({type: 'button'})`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.5rem; 
  padding: 1rem 1.5rem;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: .2s border ease;

  :hover {
    border-color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`