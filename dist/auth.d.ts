import { MangaDBAPI } from "./index";
import { AuthData } from "./data-interfaces/auth";
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
     * Returns the auth token.
     * @throws {UnauthenticatedError}
     */
    getAuthToken(): string;
    /**
     * Logs out the user.
     * @throws {UnauthenticatedError}
     */
    logout(): Promise<void>;
    register(name: string, email: string, password: string, password_confirmation: string): Promise<boolean>;
    /**
     * Authenticates the user.
     * @param email
     * @param password
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, UserNotFoundError}
     */
    login(email: string, password: string): Promise<AuthData>;
}
