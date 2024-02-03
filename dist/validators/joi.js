"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joi = void 0;
const tslib_1 = require("tslib");
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
exports.Joi = joi_1.default;
const joi_objectid_1 = (0, tslib_1.__importDefault)(require("joi-objectid"));
joi_1.default.objectId = (0, joi_objectid_1.default)(joi_1.default);
//# sourceMappingURL=joi.js.map