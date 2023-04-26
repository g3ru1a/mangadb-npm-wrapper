import { MangaDBAPI } from "./index";
import { AuthData } from "./data-types/auth";
export declare class Auth {
    private api;
    constructor(api: MangaDBAPI);
    /**
     * Checks if the user is authenticated.
     * @param should_throw
     * @throws {UnauthenticatedError}
     */
    isAuthenticated(should_throw?: boolean): Promise<boolean>;
    /**
     * Authenticates the user.
     * @param email
     * @param password
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, UserNotFoundError}
     */
    login(email: string, password: string): Promise<AuthData | null>;
}
