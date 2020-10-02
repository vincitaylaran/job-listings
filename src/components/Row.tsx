import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
  width: 80%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 25px;
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
}

const Row: React.FC<Props> = ({ children }) => {
  return (
    <StyledRow>
      <StyledRowContent>{children}</StyledRowContent>
    </StyledRow>
  )
}

export default Row
