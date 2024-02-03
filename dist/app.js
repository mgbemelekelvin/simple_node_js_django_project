"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const postRoute_1 = (0, tslib_1.__importDefault)(require("./routes/postRoute"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const postController_1 = require("./controllers/postController");
const app = (0, express_1.default)();
// Set 'views' directory for any views
app.set('views', path_1.default.join(__dirname, 'views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');
//Serves resources from public folder
app.use('/resources', express_1.default.static('src/public'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.get('/', postController_1.home); //get post
app.use('/', postRoute_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map