export class UserNotFoundError extends Error {
	constructor(message?: string) {
		const msg = message || "Couldn't find user.";
		super(msg);
		Object.setPrototypeOf(this, UserNotFoundError.prototype);
		this.name = "UserNotFoundError";
		this.message = msg;
	}
}