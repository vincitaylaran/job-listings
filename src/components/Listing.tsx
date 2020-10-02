import React from "react"
import Row, { StyledRow } from "./Row"
import styled, { css } from "styled-components"

const coloredLeftBorder = css`
  border-left: 5px solid #5ca5a5;
`

interface Props {
  children?: React.ReactNode
  isNew?: boolean
  isFeatured?: boolean
}

const Listing: React.FC<Props> = ({ children, isNew, isFeatured }) => {
  return (
    <Row
      style={isNew && isFeatured ? { borderLeft: "5px solid #5ca5a5" } : null}
    >
      {children}
    </Row>
  )
}

export default Listing
