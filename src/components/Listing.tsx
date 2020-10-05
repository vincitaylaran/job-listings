import React, { Suspense } from "react"
import Row from "./Row"
import styled from "styled-components"
import Button from "./Button"
import BREAKPOINT from "../styles/breakpoints"

const ListingContent = styled.div`
  display: flex;
`

const ListingSubcontent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media all and (max-width: ${BREAKPOINT.mobile}) {
    border-top: 1px solid #b7c4c4;
    margin-top: 13px;
  }
`

const ListingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  height: 100%;

  & div {
    background-color: red;
    height: 33%;
    display: flex;
    align-items: center;
  }
`

export interface Props {
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
  const Logo = React.lazy(
    () => import(`../Icons/${company.replace(/[ ,.]/g, "")}`)
  )

  return (
    <Row
      style={isNew && isFeatured ? { borderLeft: "5px solid #5ca5a5" } : null}
    >
      <ListingContent>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Logo />
          </Suspense>
        </div>

        <ListingInfoContainer>
          <div>
            <span>{company}</span>
            <span>{isNew ? "new" : null}</span>
            <span>{isFeatured ? "featured" : null}</span>
          </div>

          <div>{position}</div>

          <div>
            {postedAt} - {contract} - {location}
          </div>
        </ListingInfoContainer>
      </ListingContent>
      <ListingSubcontent>
        {keywords.map((keyword, index) => (
          <Button key={index}>{keyword}</Button>
        ))}
      </ListingSubcontent>
    </Row>
  )
}

export default Listing
