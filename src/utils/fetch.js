async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error)
        throw error
    }
}

export default fetchData
