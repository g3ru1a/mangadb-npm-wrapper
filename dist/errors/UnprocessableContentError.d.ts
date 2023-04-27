import { UnprocessableContentErrorData } from "../data-interfaces/errors";
export declare class UnprocessableContentError extends Error {
    data: UnprocessableContentErrorData;
    constructor(data: object, message?: string);
}
