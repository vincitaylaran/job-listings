import React, { useRef } from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  animation: ${fadeIn} 100ms ease-in;
  height: 32px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.1px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => props.clickable && "pointer"};
  color: #5ca5a5;
  outline: none;
  background-color: #efefef;
  padding: 0 8px;

  &:hover {
    background-color: ${(props) => props.clickable && "#5ca5a5"};
    color: ${(props) => props.clickable && "#ffffff"};
  }
`

interface Props {
  children?: React.ReactNode
  onClick?: (...args) => any
  clickable?: boolean
  style?: object
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  style,
  clickable = true,
}) => {
  const spanEl = useRef<HTMLSpanElement>(null)

  const handleClick = () => {
    if (onClick && spanEl.current?.innerText && clickable) {
      onClick(spanEl.current.innerText)
    }
  }

  return (
    <StyledSpan
      clickable={clickable}
      ref={spanEl}
      onClick={handleClick}
      style={style}
    >
      {children}
    </StyledSpan>
  )
}

export default Button
