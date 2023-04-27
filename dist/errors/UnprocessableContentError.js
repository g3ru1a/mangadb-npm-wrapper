export class UnprocessableContentError extends Error {
    data;
    constructor(data, message) {
        const msg = message || "Check the data that was submitted.";
        super(msg);
        Object.setPrototypeOf(this, UnprocessableContentError.prototype);
        this.name = "UnprocessableContentError";
        this.message = msg;
        this.data = data;
    }
}
//# sourceMappingURL=UnprocessableContentError.js.map