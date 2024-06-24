async function fetchData(url) {
    try {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error)
        throw error
    }
}

export default fetchData
