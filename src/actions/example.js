const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

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