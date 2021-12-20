export const doGetRequest = async (path) => {
    const url = `${path}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}