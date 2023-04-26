import {MangaDBAPI} from "./index";
import {AuthData} from "./data-types/auth";
import {UnauthenticatedError} from "./errors/UnauthenticatedError";
import {AlreadyAuthenticatedError} from "./errors/AlreadyAuthenticatedError";
import {UnprocessableContentError} from "./errors/UnprocessableContentError";
import {UserNotFoundError} from "./errors/UserNotFoundError";

export class Auth {
	private api: MangaDBAPI;

	constructor(api: MangaDBAPI) {
		this.api = api;
	}

	/**
	 * Checks if the user is authenticated.
	 * @param should_throw
	 * @throws {UnauthenticatedError}
	 */
	async isAuthenticated(should_throw: boolean = false): Promise<boolean> {
		const localUser = localStorage.getItem('auth');

		if (localUser === null){
			if(should_throw) throw new UnauthenticatedError();
			else return false;
		}
		const authData: AuthData = JSON.parse(localUser) as AuthData;
		if (!authData.token){
			if(should_throw) throw new UnauthenticatedError();
			else return false;
		}
		return true;
	}

	/**
	 * Authenticates the user.
	 * @param email
	 * @param password
	 * @throws {AlreadyAuthenticatedError, UnprocessableContentError, UserNotFoundError}
	 */
	async login(email: string, password: string): Promise<AuthData|null> {
		if (await this.isAuthenticated()) {
			throw new AlreadyAuthenticatedError();
		}
		const url = this.api.baseURL + "/login";
		const config: object = {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "omit",
			headers: MangaDBAPI.RequestHeaders
		}
		const response = await fetch(url, {
			...config,
			body: JSON.stringify({email: email, password: password})
		});
		console.log(response);

		if (response.status == 200){
			const data: AuthData = await response.json() as AuthData;
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