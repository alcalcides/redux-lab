export const doGetRequest = async (path) => {
    const url = `${path}`
    const response = await fetch(url)
    return await response.json()
}