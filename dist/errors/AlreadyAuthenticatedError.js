export class AlreadyAuthenticatedError extends Error {
    constructor(message) {
        const msg = message || "User is Already Authenticated.";
        super(msg);
        Object.setPrototypeOf(this, AlreadyAuthenticatedError.prototype);
        this.name = "AlreadyAuthenticatedError";
        this.message = msg;
    }
}
//# sourceMappingURL=AlreadyAuthenticatedError.js.map