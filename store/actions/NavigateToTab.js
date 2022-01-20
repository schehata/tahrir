export default async ({ state, commit }, tabIndex) => {
  // change editor content
  const file = await state.tabs[tabIndex].fileHandle.getFile()
  const content = await file.text()

  commit('SET_ACTIVE_TAB_INDEX', tabIndex)
  commit('SET_CONTENT', content)
}
