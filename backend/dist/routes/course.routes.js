"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseRouter = (0, express_1.Router)();
// get the list of all courses being offered by the vendor
courseRouter.get("/courses", function (req, res) {
    res.status(200).json({
        message: "Successfully fetched the list of all offered courses"
    });
});
// get the course preview to be shown to the user
courseRouter.get("/preview", function (req, res) {
    res.status(200).json({
        message: "Successfully fetched the course preview in this case"
    });
});
exports.default = courseRouter;
