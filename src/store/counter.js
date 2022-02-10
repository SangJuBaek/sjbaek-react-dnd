export const TEST_ACTION = 'TEST/TEST_ACTION'

export const testActionCnt = cnt => ({ type: TEST_ACTION, cnt })

const initialState = {
  cnt: 0
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        cnt: action.cnt
      }
    default:
      return state
  }
}
