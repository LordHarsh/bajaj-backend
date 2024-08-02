"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here...
    app.post('/', controller_1.handle_post_bfhl);
    app.get('/', controller_1.handle_get_bfhl);
    return app;
};
//# sourceMappingURL=router.js.map