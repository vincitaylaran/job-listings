import React from "react"
import Row from "./Row"
import styled from "styled-components"
import Button from "./Button"
import BREAKPOINT from "../styles/breakpoints"

const ListingContent = styled.div``

const ListingSubcontent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media all and (max-width: ${BREAKPOINT.mobile}) {
    border-top: 1px solid #b7c4c4;
    margin-top: 13px;
  }
`

interface Props {
  id: number
  company: string
  logo: string
  isNew: boolean
  isFeatured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
  keywords: string[]
}

const Listing: React.FC<Props> = ({
  id,
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  keywords,
}) => {
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
