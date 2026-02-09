"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIErrorResult = void 0;
const APIErrorResult = (errors) => {
    return { errorsMessages: errors };
};
exports.APIErrorResult = APIErrorResult;
