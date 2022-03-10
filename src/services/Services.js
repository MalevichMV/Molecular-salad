const useServices = () => {
    const getAllSalads = async () => {
        const result = await fetch('http://localhost:3000/salad')
        return await result.json()
    }

    return {getAllSalads}
}

export default useServices;