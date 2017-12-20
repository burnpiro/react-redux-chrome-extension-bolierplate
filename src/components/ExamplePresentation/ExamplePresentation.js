import React from 'react'

const ExamplePresentation = ({setExampleData, sampleData}) => {
  return (
    <div>
      {sampleData}
      <button onClick={() => setExampleData(sampleData + 'testData')} >SetData</button>
    </div>
  )
}

export default ExamplePresentation
