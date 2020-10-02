import React from "react"
import styled from "styled-components"

export const StyledRow = styled.div`
  width: 85%;
  background-color: #ffffff;
  padding: 25px;

  border-radius: 5px;

  -webkit-box-shadow: 0px 8px 12px 1px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 8px 12px 1px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 8px 12px 1px rgba(0, 0, 0, 0.11);
`

const StyledRowContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 425px) {
    flex-direction: column;
  }
`

interface Props {
  children?: React.ReactNode
  style?: object | null
}

const Row: React.FC<Props> = ({ children, style }) => {
  return (
    <StyledRow style={style ? style : null}>
      <StyledRowContent>{children}</StyledRowContent>
    </StyledRow>
  )
}

export default Row
