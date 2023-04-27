export class BadPayloadError extends Error {
	constructor(message?: string) {
		const msg = message || "Bad Payload.";
		super(msg);
		Object.setPrototypeOf(this, BadPayloadError.prototype);
		this.name = "BadPayloadError";
		this.message = msg;
	}
}