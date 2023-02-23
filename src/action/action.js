import axios from "axios";
export async function GetMovies() {
	try {
		const response = await axios.get("http://localhost:8080/api/getBallotData");
		return response.data.items;
	} catch (error) {
		console.error(error);
	}
}
