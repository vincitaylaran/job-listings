import React from "react"
import styled from "styled-components"
import BREAKPOINT from "../styles/breakpoints"

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  height: 32px;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: -0.1px;
  border: none;
  border-radius: 5px;
  margin-right: 13px;
  cursor: pointer;
  color: #5ca5a5;
  outline: none;

  &:hover {
    background-color: #5ca5a5;
    color: #ffffff;
  }

  @media all and (max-width: ${BREAKPOINT.laptop}) {
    margin-top: 13px;
  }
`

interface Props {
  children?: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
