"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const s3Utils_1 = require("../utils/s3Utils");
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jsonData = JSON.parse(event.body);
        const key = `data-${Date.now()}.json`;
        const result = yield (0, s3Utils_1.uploadJSON)(key, jsonData);
        return {
            statusCode: 200,
            body: JSON.stringify({ e_tag: result.ETag, url: result.Location }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to store data' }),
        };
    }
});
exports.handler = handler;