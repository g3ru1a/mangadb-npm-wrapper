import {MangaDBAPI} from "../index";

class FetchHelper {
	static getConfig(method: string, auth_token: string|null = null): object{
		let headers: HeadersInit = {...MangaDBAPI.RequestHeaders};
		if(auth_token){
			headers = {
				...MangaDBAPI.RequestHeaders,
				"Authorization": "Bearer " + auth_token
			};
		}
		return {
			method: method,
			mode: "cors",
			cache: "no-cache",
			credentials: "omit",
			headers: headers
		}
	}
}

export default FetchHelper;