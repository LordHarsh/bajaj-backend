"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here..
    app.use('/bfhl', require('./bfhl/router').default());
    return app;
};
//# sourceMappingURL=index.js.map