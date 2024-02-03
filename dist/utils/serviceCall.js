"use strict";
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const callService = async ({ url, method, }) => {
    let resStatus = 500;
    let resData = {
        success: false,
        message: 'Something went wrong',
    };
    const config = {
        method,
        url,
        headers: {},
    };
    return (0, axios_1.default)(config)
        .then(({ status, data }) => {
        resStatus = status;
        resData = data;
    })
        .catch(({ response }) => {
        if (response) {
            const { status, data } = response;
            resStatus = status;
            resData = data;
        }
    })
        .then(() => ({ resStatus, resData }));
};
module.exports = callService;
//# sourceMappingURL=serviceCall.js.map