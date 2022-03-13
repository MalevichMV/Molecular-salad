const useServices = () => {
    const getAllSalads = async () => {
        const result = await fetch('http://localhost:3000/salad') 
        return await result.json()
    }

    const getAllIngredients = async () => {
        const result = await fetch('http://localhost:3000/molecule') 
        return await result.json()
    }

    const postData = async (data) => {        
        const result = await fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        });
        return await result.json();
    };

    return {getAllSalads, getAllIngredients, postData}
}

export default useServices;