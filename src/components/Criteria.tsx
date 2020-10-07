import React from "react"
import Row from "./Row"

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
      onRemove(e.target.value)
    }
  }

  return (
    <Row>
      <div>
        {keywords
          ? keywords.map((word, index) => (
              <button
                key={`${word}-${index}`}
                value={word}
                onClick={handleRemove}
              >
                {word}
              </button>
            ))
          : null}
      </div>
      <button onClick={handleClear}>Clear button</button>
    </Row>
  )
}

export default Criteria
