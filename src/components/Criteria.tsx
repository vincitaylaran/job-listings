import React, { useRef, useEffect, useState } from "react"
import Row from "./Row"
import Keyword from "./Keyword"
import styled from "styled-components"
import BREAKPOINT from "../styles/breakpoints"
import { FaTimes } from "react-icons/fa"

const StyledDiv = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;

  div {
    margin-right: 13px;
  }

  /* @media all and (max-width: ${BREAKPOINT.mobile}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 0.9rem;
  } */
`

const StyledBorderlessButton = styled.button`
  border-style: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  color: #7c8f8f;
  width: 17%;

  &:hover {
    text-decoration: underline;
  }
`

const StyledRemoveButton = styled.button`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-style: none;
  cursor: pointer;
  outline: none;
  background-color: #5ca5a5;

  &:hover {
    background-color: #2b3939;
  }
`

const KeywordWithButton = styled.div`
  display: flex;
  margin-bottom: 10px;
`

interface Props {
  keywords?: string[]
  onClear?: () => void
  onRemove?: (keyword?: string) => void
}

const Criteria: React.FC<Props> = ({ keywords, onClear, onRemove }) => {
  const buttonEl = useRef<HTMLButtonElement>()

  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }

  const handleRemove = () => {
    if (onRemove) {
      if (buttonEl.current) {
        console.log(buttonEl.current.value)
        onRemove(buttonEl.current.value)
      }
    }
  }

  return (
    <Row>
      <StyledDiv style={{ backgroundColor: "red" }}>
        {keywords &&
          keywords.map((word, index) => (
            <KeywordWithButton key={`${word}-${index}`}>
              <Keyword
                clickable={false}
                onClick={onRemove}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                {word}
              </Keyword>
              <StyledRemoveButton
                ref={buttonEl}
                value={word}
                onClick={handleRemove}
              >
                <FaTimes style={{ color: "#ffffff" }} />
              </StyledRemoveButton>
            </KeywordWithButton>
          ))}
      </StyledDiv>
      <StyledBorderlessButton onClick={handleClear}>
        Clear
      </StyledBorderlessButton>
    </Row>
  )
}

export default Criteria
