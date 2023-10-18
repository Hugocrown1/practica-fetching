export const fetchInfo = async () => {
    const response = await fetch('https://dummyjson.com/products')
    return response.json()
  }