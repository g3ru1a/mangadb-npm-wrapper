import { MangaDBAPI } from "./index";
import { AuthData } from "./data-interfaces/auth";
export interface IAuth {
    isAuthenticated(should_throw: boolean): Promise<boolean>;
    getAuthToken(): string;
    logout(): Promise<void>;
    login(email: string, password: string): Promise<AuthData>;
    register(name: string, email: string, password: string, password_confirmation: string): Promise<boolean>;
    verifyEmail(payload: string): Promise<boolean>;
    resetPassword(email: string): Promise<boolean>;
    verifyPasswordResetToken(payload: string, password: string, password_confirmation: string): Promise<boolean>;
}
export declare class Auth implements IAuth {
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
     * Verifies the user's credentials and authenticates them.
     * @param payload
     * @throws {BadPayloadError, Error}
     */
    verifyEmail(payload: string): Promise<boolean>;
    resetPassword(email: string): Promise<boolean>;
    verifyPasswordResetToken(payload: string, password: string, password_confirmation: string): Promise<boolean>;
    /**
     * Logs out the user.
     * @throws {UnauthenticatedError}
     */
    logout(): Promise<void>;
    /**
     * Registers the user
     * @param name
     * @param email
     * @param password
     * @param password_confirmation
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, Error}
     */
    register(name: string, email: string, password: string, password_confirmation: string): Promise<boolean>;
    /**
     * Authenticates the user.
     * @param email
     * @param password
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, UserNotFoundError}
     */
    login(email: string, password: string): Promise<AuthData>;
}
