import {UnprocessableContentErrorData} from "../data-interfaces/errors";

export class UnprocessableContentError extends Error {
	public data: UnprocessableContentErrorData;
	constructor(data: object, message?: string) {
		const msg = message || "Check the data that was submitted.";
		super(msg);
		Object.setPrototypeOf(this, UnprocessableContentError.prototype);
		this.name = "UnprocessableContentError";
		this.message = msg;
		this.data = data as UnprocessableContentErrorData;
	}
}