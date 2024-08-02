"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_get_bfhl = exports.handle_post_bfhl = void 0;
const service_1 = require("./service");
const handle_post_bfhl = (req, res) => {
    try {
        const { data } = req.body;
        const response = (0, service_1.bfhl)(data);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.handle_post_bfhl = handle_post_bfhl;
const handle_get_bfhl = (req, res) => {
    try {
        res.status(200).send({ operation_code: 1 });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.handle_get_bfhl = handle_get_bfhl;
//# sourceMappingURL=controller.js.map