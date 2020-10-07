import React from "react"
import Row from "./Row"

interface Props {
  keywords?: string[]
  onClear?: () => void
}

const Criteria: React.FC<Props> = ({ keywords, onClear }) => {
  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }

  return (
    <Row>
      <div>
        {keywords
          ? keywords.map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))
          : null}
      </div>
      <button onClick={handleClear}>Clear button</button>
    </Row>
  )
}

export default Criteria
