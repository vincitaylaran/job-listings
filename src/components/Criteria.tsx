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
  display: flex;
  justify-content: center;
  align-items: center;

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
  hidden?: boolean
}

const Criteria: React.FC<Props> = ({ keywords, onClear, onRemove, hidden }) => {
  
  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }

  const handleRemove = (value) => {
    if (onRemove) {
      onRemove(value)
    }
  }


  return (
    <Row style={{ marginBottom: "20px", borderLeft: "5px solid #ffffff"}} hidden={hidden}>
      <StyledDiv>
        {keywords &&
          keywords.map((word, index) => (
            <KeywordWithButton key={`${word}-${index}`}>
              <Keyword
                clickable={false}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                {word}
              </Keyword>
              <StyledRemoveButton value={word} onClick={() => handleRemove(word)}>
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
