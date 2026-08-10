import React from 'react'

const ExplainVirtualDom = () => {
  return (
    <div>
      <h1>React's Virtual DOM creates a lightweight copy of the real DOM in memory. When data changes, React compares the new Virtual DOM with the previous one and finds only the parts that have changed. It then updates only those specific elements in the real DOM instead of reloading the entire page. This reduces unnecessary DOM operations and makes UI updates much faster and more efficient.</h1>
    </div>
  )
}

export default ExplainVirtualDom
