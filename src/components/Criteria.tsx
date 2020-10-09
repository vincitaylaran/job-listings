import React from "react"
import Row from "./Row"
import Keyword from "./Keyword"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

const StyledDiv = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;

  div {
    margin-right: 13px;
  }
`

const StyledBorderlessButton = styled.button`
  border-style: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  color: #7c8f8f;
  background-color: inherit;

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
  width: 32px;

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
  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }

  const handleRemove = (e) => {
    if (onRemove) {
      if (e.target.value) {
        onRemove(e.target.value)
      }
    }
  }

  return (
    <Row>
      <StyledDiv>
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
              <StyledRemoveButton value={word} onClick={handleRemove}>
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
