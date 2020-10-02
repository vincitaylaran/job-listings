import React from "react"
import Row from "./Row"
import styled, { css } from "styled-components"
import Button from "./Button"

const ListingContent = styled.div``

const ListingSubcontent = styled.div`
  display: flex;
  align-items: center;
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
      <ListingContent>asdasdasdsad</ListingContent>
      <ListingSubcontent>
        {["Frontend", "Senior", "HTML", "CSS", "JavaScript"].map((keyword) => (
          <Button>{keyword}</Button>
        ))}
      </ListingSubcontent>
    </Row>
  )
}

export default Listing
