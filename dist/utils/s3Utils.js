"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getAllJSONData = exports.uploadJSON = void 0;
const s3Config_1 = __importStar(require("../config/s3Config"));
const uploadJSON = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        Bucket: s3Config_1.bucketName,
        Key: key,
        Body: JSON.stringify(data),
        ContentType: 'application/json',
    };
    const result = yield s3Config_1.default.upload(params).promise();
    return result;
});
exports.uploadJSON = uploadJSON;
const getAllJSONData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const params = { Bucket: s3Config_1.bucketName };
    const objects = yield s3Config_1.default.listObjectsV2(params).promise();
    const data = yield Promise.all(((_a = objects.Contents) === null || _a === void 0 ? void 0 : _a.map((file) => __awaiter(void 0, void 0, void 0, function* () {
        const fileData = yield s3Config_1.default.getObject({ Bucket: s3Config_1.bucketName, Key: file.Key }).promise();
        return JSON.parse(fileData.Body.toString('utf-8'));
    }))) || []);
    return data;
});
exports.getAllJSONData = getAllJSONData;
