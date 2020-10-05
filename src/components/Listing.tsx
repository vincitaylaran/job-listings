import React, { Suspense } from "react"
import Row from "./Row"
import styled from "styled-components"
import Button from "./Button"
import BREAKPOINT from "../styles/breakpoints"

const ListingContent = styled.div`
  display: flex;

  @media all and (max-width: ${BREAKPOINT.mobile}) {
    flex-direction: column;
  }
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
  height: 100%;

  @media all and (min-width: ${BREAKPOINT.tablet}) {
    margin: 0 20px;
  }

  & div {
    height: 33%;
    display: flex;
    align-items: center;
  }
`

const CompanyName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-right: 15px;
  color: #5ca5a5;

  @media all and (max-width: ${BREAKPOINT.tablet}) {
    font-size: 13px;
  }
`
const Tag = styled.span`
  background-color: ${(props) => (props.secondary ? "#2B3939" : "#5ca5a5")};
  color: #ffffff;
  font-weight: 700;
  font-size: 9px;
  padding: 3px 7px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  letter-spacing: 0.75px;
  margin-right: 7px;
`

const Position = styled.div`
  color: #5ca5a5;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  transition-duration: 150ms;
  cursor: pointer;
  margin-bottom: 5px;

  @media all and (max-width: ${BREAKPOINT.tablet}) {
    margin: 10px 0 5px 0;
    font-size: 15px;
  }

  &:hover {
    color: #5ca5a5;
  }
`
const Miscellaneous = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.115385px;
  color: #7c8f8f;

  @media all and (max-width: ${BREAKPOINT.tablet}) {
    font-size: 13px;
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
            <CompanyName>{company}</CompanyName>
            {isNew && isFeatured ? (
              <div>
                <Tag>new!</Tag>
                <Tag secondary>featured</Tag>
              </div>
            ) : null}
          </div>

          <Position>{position}</Position>

          <Miscellaneous>
            {postedAt} • {contract} • {location}
          </Miscellaneous>
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
