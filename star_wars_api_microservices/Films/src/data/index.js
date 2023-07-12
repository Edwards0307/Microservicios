export default {
    list: async () => {
        const result = axios.get("http://database:8004/Films");
        return result.data
    }
}