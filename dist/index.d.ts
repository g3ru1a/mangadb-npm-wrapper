import { Auth, IAuth } from "./auth";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
import { BadPayloadError } from "./errors/BadPayloadError";
declare class MangaDBAPI {
    static RequestHeaders: HeadersInit;
    Auth: IAuth;
    baseURL: string;
    /**
     * @param {string} baseURL - The base URL of the API. Options: "API", "SANDBOX", <custom_url>
     */
    constructor(baseURL: string);
}
export { MangaDBAPI, IAuth, Auth, AlreadyAuthenticatedError, UnauthenticatedError, UnprocessableContentError, UserNotFoundError, BadPayloadError, };
export * from "./data-interfaces/models";
export * from "./data-interfaces/auth";
export * from "./data-interfaces/errors";
