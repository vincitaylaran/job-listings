import React, { useRef } from "react"
import styled from "styled-components"
import BREAKPOINT from "../styles/breakpoints"

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  height: 32px;
  font-weight: 700;
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
  value: string
  onClick?: (...args) => any
}

const Button: React.FC<Props> = ({ children, onClick, value }) => {
  const buttonEl = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (onClick) {
      onClick(buttonEl.current!.value)
    }
  }

  return (
    <StyledButton ref={buttonEl} value={value} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button
