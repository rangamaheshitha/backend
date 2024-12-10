"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _mocks_1 = require("../../_mocks_");
const users_1 = require("../../handlers/users");
describe('getUsers', () => {
    it('should return an array of users', () => {
        (0, users_1.getUser)(_mocks_1.mockRequest, _mocks_1.mockResponse);
        expect(_mocks_1.mockResponse.send).toHaveBeenCalledWith([]);
    });
});
