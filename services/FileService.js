export default {
  async openFilePicker () {
    const [fileHandle] = await window.showOpenFilePicker()
    return fileHandle
  }
}
