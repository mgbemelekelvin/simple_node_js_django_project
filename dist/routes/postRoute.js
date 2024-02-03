"use strict";
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
router.get('/getPost', postController_1.getPost); //get post
module.exports = router;
//# sourceMappingURL=postRoute.js.map