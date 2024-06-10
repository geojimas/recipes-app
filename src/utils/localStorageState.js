export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cardState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state from local storage', err)
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cardState', serializedState)
  } catch (err) {
    console.error('Could not save state to local storage', err)
  }
}
