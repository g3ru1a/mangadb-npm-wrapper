import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
import FetchHelper from "./utils/fetch-helper";
import { BadPayloadError } from "./errors/BadPayloadError";
export class Auth {
    api;
    constructor(api) {
        this.api = api;
    }
    /**
     * Checks if the user is authenticated.
     * @param should_throw
     * @throws {UnauthenticatedError}
     */
    async isAuthenticated(should_throw = false) {
        const localUser = localStorage.getItem('auth');
        if (localUser === null) {
            if (should_throw)
                throw new UnauthenticatedError();
            else
                return false;
        }
        const authData = JSON.parse(localUser);
        if (!authData.token) {
            if (should_throw)
                throw new UnauthenticatedError();
            else
                return false;
        }
        return true;
    }
    /**
     * Returns the auth token.
     * @throws {UnauthenticatedError}
     */
    getAuthToken() {
        const localUser = localStorage.getItem('auth');
        if (localUser === null)
            throw new UnauthenticatedError();
        const authData = JSON.parse(localUser);
        if (authData.token === null)
            throw new UnauthenticatedError();
        return authData.token;
    }
    /**
     * Verifies the user's credentials and authenticates them.
     * @param payload
     * @throws {BadPayloadError, Error}
     */
    async verifyEmail(payload) {
        const url = this.api.baseURL + "/verify";
        const config = FetchHelper.getConfig("POST");
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({ payload: payload })
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("auth", JSON.stringify(data));
            return true;
        }
        switch (response.status) {
            case 400:
                throw new BadPayloadError();
            default:
                throw new Error("Unknown error");
        }
    }
    async resetPassword(email) {
        const url = this.api.baseURL + "/password/reset";
        const config = FetchHelper.getConfig("POST");
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({ email: email })
        });
        if (response.status === 200) {
            return true;
        }
        switch (response.status) {
            case 404:
                throw new UserNotFoundError();
            case 422:
                throw new UnprocessableContentError(await response.json());
            default:
                throw new Error("Unknown error");
        }
    }
    async verifyPasswordResetToken(payload, password, password_confirmation) {
        const url = this.api.baseURL + "/password/verify";
        const config = FetchHelper.getConfig("POST");
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({
                payload: payload,
                password: password,
                password_confirmation: password_confirmation
            })
        });
        if (response.status === 200) {
            return true;
        }
        switch (response.status) {
            case 422:
                throw new UnprocessableContentError(await response.json());
            case 400:
                throw new BadPayloadError();
            default:
                throw new Error("Unknown error");
        }
    }
    /**
     * Logs out the user.
     * @throws {UnauthenticatedError}
     */
    async logout() {
        if (!await this.isAuthenticated())
            throw new UnauthenticatedError();
        try {
            const url = this.api.baseURL + "/logout";
            const config = FetchHelper.getConfig("POST", this.getAuthToken());
            const response = await fetch(url, config);
            if (response.status === 200) {
                localStorage.removeItem('auth');
                return;
            }
            else
                console.error(response);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Registers the user
     * @param name
     * @param email
     * @param password
     * @param password_confirmation
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, Error}
     */
    async register(name, email, password, password_confirmation) {
        if (await this.isAuthenticated()) {
            throw new AlreadyAuthenticatedError();
        }
        const url = this.api.baseURL + "/register";
        const config = FetchHelper.getConfig("POST");
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            })
        });
        if (response.status == 200) {
            return true;
        }
        switch (response.status) {
            case 422:
                throw new UnprocessableContentError(await response.json());
            default:
                throw new Error(await response.text());
        }
    }
    /**
     * Authenticates the user.
     * @param email
     * @param password
     * @throws {AlreadyAuthenticatedError, UnprocessableContentError, UserNotFoundError}
     */
    async login(email, password) {
        if (await this.isAuthenticated()) {
            throw new AlreadyAuthenticatedError();
        }
        const url = this.api.baseURL + "/login";
        const config = FetchHelper.getConfig("POST");
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({ email: email, password: password })
        });
        if (response.status == 200) {
            const data = await response.json();
            localStorage.setItem("auth", JSON.stringify(data));
            return data;
        }
        switch (response.status) {
            case 422:
                throw new UnprocessableContentError(await response.json());
            case 404:
                throw new UserNotFoundError();
            default:
                throw new Error(await response.text());
        }
    }
}
//# sourceMappingURL=auth.js.map