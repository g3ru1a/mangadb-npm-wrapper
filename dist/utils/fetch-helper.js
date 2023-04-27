import { MangaDBAPI } from "../index";
class FetchHelper {
    static getConfig(method, auth_token = null) {
        let headers = { ...MangaDBAPI.RequestHeaders };
        if (auth_token) {
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
        };
    }
}
export default FetchHelper;
//# sourceMappingURL=fetch-helper.js.map