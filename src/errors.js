export class ViaError extends Error {
    constructor(code, msg) {
        super(msg);
        this.code = code;
        this.msg = msg;
    }
}
