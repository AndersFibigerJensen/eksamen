"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.deleteUserById = exports.GetUser = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../output/entities/User");
const UserRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const GetUser = async (usernameid, passwordid) => {
    try {
        const user = await UserRepository.findOne({
            where: { username: String(usernameid), password: (passwordid) },
        });
        return user;
    }
    catch (error) {
        throw new Error(`user with username ${usernameid} and password ${passwordid}
            cannot be found`);
    }
};
exports.GetUser = GetUser;
const deleteUserById = async (UserId) => {
    try {
        await UserRepository.delete(UserId);
    }
    catch (error) {
        throw new Error(`Failed to delete game with ID ${UserId}.`);
    }
};
exports.deleteUserById = deleteUserById;
const createUser = async (UserData) => {
    const User = UserRepository.create(UserData);
    return await UserRepository.save(User);
};
exports.createUser = createUser;
const updateUser = async (UserId, UserData) => {
    await UserRepository.update(UserId, UserData);
    const updatedBudget = await UserRepository.findOneBy({ idUser: UserId });
    if (!updatedBudget) { }
    return updatedBudget;
};
exports.updateUser = updateUser;
//# sourceMappingURL=UserService.js.map