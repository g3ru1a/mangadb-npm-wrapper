export class AlreadyAuthenticatedError extends Error {
	constructor(message?: string) {
		const msg = message || "User is Already Authenticated.";
		super(msg);
		Object.setPrototypeOf(this, AlreadyAuthenticatedError.prototype);
		this.name = "AlreadyAuthenticatedError";
		this.message = msg;
	}
}