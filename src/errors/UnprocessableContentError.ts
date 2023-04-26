export class UnprocessableContentError extends Error {
	constructor(message?: string) {
		const msg = message || "Check the data that was submitted.";
		super(msg);
		Object.setPrototypeOf(this, UnprocessableContentError.prototype);
		this.name = "UnprocessableContentError";
		this.message = msg;
	}
}