import React from "react"
import styled from "styled-components"

export const StyledRow = styled.div`
  width: 85%;
  background-color: #ffffff;
  padding: 25px;

  border-radius: 5px;
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
