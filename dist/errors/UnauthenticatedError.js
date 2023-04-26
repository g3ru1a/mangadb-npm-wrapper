export class UnauthenticatedError extends Error {
    constructor(message) {
        const msg = message || "Unauthenticated.";
        super(msg);
        Object.setPrototypeOf(this, UnauthenticatedError.prototype);
        this.name = "UnauthenticatedError";
        this.message = msg;
    }
}
//# sourceMappingURL=UnauthenticatedError.js.map