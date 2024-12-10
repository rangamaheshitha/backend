"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.getUserById = getUserById;
exports.createUser = createUser;
function getUser(request, response) {
    response.send([]);
}
function getUserById(request, response) {
    response.send({});
}
function createUser(request, response) {
    response.status(200).send({
        id: 1,
        username: "ranga",
        email: "ranga@gmail.com"
    });
}
