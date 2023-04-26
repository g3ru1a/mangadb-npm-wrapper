import { MangaDBAPI } from "./index";
import { UnauthenticatedError } from "./errors/UnauthenticatedError";
import { AlreadyAuthenticatedError } from "./errors/AlreadyAuthenticatedError";
import { UnprocessableContentError } from "./errors/UnprocessableContentError";
import { UserNotFoundError } from "./errors/UserNotFoundError";
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
        const config = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: MangaDBAPI.RequestHeaders
        };
        const response = await fetch(url, {
            ...config,
            body: JSON.stringify({ email: email, password: password })
        });
        console.log(response);
        if (response.status == 200) {
            const data = await response.json();
            localStorage.setItem("auth", JSON.stringify(data));
            return data;
        }
        switch (response.status) {
            case 422:
                throw new UnprocessableContentError();
            case 404:
                throw new UserNotFoundError();
        }
        return null;
    }
}
//# sourceMappingURL=auth.js.map