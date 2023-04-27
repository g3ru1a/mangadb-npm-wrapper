import { Auth } from "./auth";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
import { BadPayloadError } from "./errors/BadPayloadError";
class MangaDBAPI {
    static RequestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    Auth;
    baseURL;
    /**
     * @param {string} baseURL - The base URL of the API. Options: "API", "SANDBOX", <custom_url>
     */
    constructor(baseURL) {
        switch (baseURL.toUpperCase()) {
            case "API":
                this.baseURL = "https://api.manga-db.com";
                break;
            case "SANDBOX":
                this.baseURL = "https://sandbox.manga-db.com";
                break;
            default:
                this.baseURL = baseURL;
                break;
        }
        this.Auth = new Auth(this);
    }
}
export { MangaDBAPI, Auth, AlreadyAuthenticatedError, UnauthenticatedError, UnprocessableContentError, UserNotFoundError, BadPayloadError, };
export * from "./data-interfaces/models";
export * from "./data-interfaces/auth";
export * from "./data-interfaces/errors";
//# sourceMappingURL=index.js.map