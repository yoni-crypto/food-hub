export declare class HttpException extends Error {
    status: number;
    constructor(message: string, status: number);
}
