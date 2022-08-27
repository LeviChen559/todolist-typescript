import axios from "axios"


const dataFetcher = async () => {
    try {
        const res = await axios.get("https://rickandmortyapi.com/api/character")
        return res.data.results
    }
    catch (err:any) {
        console.log(err.message);
    }
}

export default dataFetcher