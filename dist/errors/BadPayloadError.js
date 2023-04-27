export class BadPayloadError extends Error {
    constructor(message) {
        const msg = message || "Bad Payload.";
        super(msg);
        Object.setPrototypeOf(this, BadPayloadError.prototype);
        this.name = "BadPayloadError";
        this.message = msg;
    }
}
//# sourceMappingURL=BadPayloadError.js.map