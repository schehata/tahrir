import FileService from '../../services/FileService'
import TabService from '../../services/TabService'
import { CREATE_NEW_TAB } from '../mutationTypes'

export default async ({ commit }) => {
  try {
    const fileHandle = await FileService.openFilePicker()
    const file = await fileHandle.getFile()
    const newTab = TabService.newTab(file.name, fileHandle)
    const tabIndex = await commit(CREATE_NEW_TAB, newTab)
    console.log(tabIndex)
    // change editor content
    const content = await file.text()

    commit('SET_ACTIVE_TAB_INDEX', tabIndex)
    commit('SET_CONTENT', content)
  } catch (err) {
    console.error(err)
    alert('operation cancled')
  }
}
