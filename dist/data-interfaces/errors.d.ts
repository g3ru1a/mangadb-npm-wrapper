export interface UnprocessableContentErrorData {
    message: string;
    error: Array<UnprocessableContentErrorUnit>;
}
export interface UnprocessableContentErrorUnit {
    [key: string]: Array<string>;
}
