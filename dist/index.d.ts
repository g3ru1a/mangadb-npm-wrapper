import { Auth } from "./auth";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
declare class MangaDBAPI {
    static RequestHeaders: HeadersInit;
    Auth: Auth;
    baseURL: string;
    constructor(baseURL: string);
}
export { MangaDBAPI, AlreadyAuthenticatedError, UnauthenticatedError, UnprocessableContentError, UserNotFoundError, };
