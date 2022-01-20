// import {
//   SET_CURRENT_TAB_CONTENT
// } from './types'

export default {
  SET_CONTENT: (state, content) => {
    state.content = content
  },
  CREATE_NEW_TAB: (state, tab) => {
    const index = state.tabs.push(tab)
    return index
  },
  SET_ACTIVE_TAB_INDEX: (state, index) => {
    state.activeTabIndex = index
  }
}
