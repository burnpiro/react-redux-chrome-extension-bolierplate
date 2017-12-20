const EXAMPLE_ACTION = 'EXAMPLE_CATION'

const setExampleData = (data) => {
  return {
    type: EXAMPLE_ACTION,
    payload: data
  }
}

export {
  EXAMPLE_ACTION,
  setExampleData
}