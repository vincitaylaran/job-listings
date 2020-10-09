import React from "react"
import styled, { keyframes } from "styled-components"
import BREAKPOINT from "../styles/breakpoints"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const StyledRow = styled.div`
  width: 75%;
  background-color: #ffffff;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 5px;
  animation: ${fadeIn} 200ms ease-in;

  -webkit-box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.11);

  @media all and (max-width: ${BREAKPOINT.mobile}) {
    margin: 20px 0;
  }
`

const StyledRowBody = styled.div`
  display: ${props => props.hidden ? "none" : "flex"};
  justify-content: space-between;

  @media all and (max-width: ${BREAKPOINT.mobile}) {
    flex-direction: ${(props) => props.flexDirection};
  }
`

interface Props {
  children?: React.ReactNode
  style?: object | null
  breakpointFlexDirection?: "column" | "row"
  hidden?: boolean
}

const Row: React.FC<Props> = ({
  children,
  style,
  breakpointFlexDirection = "row",
  hidden = false
}) => {
  return (
    <StyledRow hidden={hidden} style={style ? style : null}>
      <StyledRowBody flexDirection={breakpointFlexDirection}>
        {children}
      </StyledRowBody>
    </StyledRow>
  )
}

export default Row
