import {Auth, IAuth} from "./auth";
import {AlreadyAuthenticatedError} from "./errors/AlreadyAuthenticatedError";
import {UnauthenticatedError} from "./errors/UnauthenticatedError";
import {UnprocessableContentError} from "./errors/UnprocessableContentError";
import {UserNotFoundError} from "./errors/UserNotFoundError";
import {BadPayloadError} from "./errors/BadPayloadError";

class MangaDBAPI {
	public static RequestHeaders: HeadersInit = {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
	public Auth: IAuth;
	public baseURL: string;

	/**
	 * @param {string} baseURL - The base URL of the API. Options: "API", "SANDBOX", <custom_url>
	 */
	constructor(baseURL: string) {
		switch (baseURL.toUpperCase()) {
			case "API":
				this.baseURL = "https://api.manga-db.com"; break;
			case "SANDBOX":
				this.baseURL = "https://sandbox.manga-db.com"; break;
			default:
				this.baseURL = baseURL; break;
		}
		this.Auth = new Auth(this);
	}

}

export {
	MangaDBAPI,
	IAuth, Auth,
	AlreadyAuthenticatedError,
	UnauthenticatedError,
	UnprocessableContentError,
	UserNotFoundError,
	BadPayloadError,
}

export * from "./data-interfaces/models";
export * from "./data-interfaces/auth";
export * from "./data-interfaces/errors";