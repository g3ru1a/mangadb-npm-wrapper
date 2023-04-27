import { Auth } from "./auth";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
class MangaDBAPI {
    static RequestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    Auth;
    baseURL;
    /*
     * @param {string} baseURL - The base URL of the API. Options: "API", "SANDBOX", <custom_url>
     */
    constructor(baseURL) {
        if (baseURL === "API") {
            this.baseURL = "https://api.manga-db.com";
        }
        else if (baseURL === "SANDBOX") {
            this.baseURL = "https://sandbox.manga-db.com";
        }
        else {
            this.baseURL = baseURL;
        }
        this.Auth = new Auth(this);
    }
}
export { MangaDBAPI, AlreadyAuthenticatedError, UnauthenticatedError, UnprocessableContentError, UserNotFoundError, };
export * from "./data-interfaces/models";
export * from "./data-interfaces/auth";
export * from "./data-interfaces/errors";
//# sourceMappingURL=index.js.map