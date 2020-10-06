import React from "react"
import Row from "./Row"

interface Props {
  keywords?: string[]
}

const Criteria: React.FC<Props> = ({ keywords }) => {
  return (
    <Row>
      <div>Keywords</div>
      <div>Clear button</div>
    </Row>
  )
}

export default Criteria
