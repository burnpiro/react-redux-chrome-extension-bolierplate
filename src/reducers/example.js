import {EXAMPLE_ACTION} from '../actions/example'

const initialState = 'test';

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return action.payload
    default:
      return state
  }
}