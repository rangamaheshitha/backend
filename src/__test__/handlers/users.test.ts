import { mockRequest, mockResponse } from "../../_mocks_"
import { getUser } from "../../handlers/users"

describe('getUsers',()=>{
    it('should return an array of users',()=>{

        getUser(mockRequest,mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith([]);
    })



})